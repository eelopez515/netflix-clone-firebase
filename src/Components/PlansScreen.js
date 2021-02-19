import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { loadStripe } from '@stripe/stripe-js'
import db from '../API/firebase'
import '../Style/PlansScreen.css'

function PlansScreen() {
    const [products, setProduct] = useState([])
    const user = useSelector(selectUser)
    const [subscription, setSubscription] = useState(null)

    useEffect(() => {
        db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(async subscription => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                })
            })
        })
    }, [user.uid])

    useEffect(() => {
        db.collection('products')
        .where('active', '==', true)
        .get()
        .then((querySnapshot) => {
            const products = {}
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data()
                const priceSnap = await productDoc.ref.collection('prices').get()
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            })
            setProduct(products)
        })
    }, [])

    const loadCheckout = async (priceId) => {
        const docRef = await db.collection('customers')
        .doc(user.uid)
        .collection('checkout_sessions')
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin
        })

        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data()

            if(error) {
                alert(`An error occured: ${error.message}`)
            }
            if(sessionId) {
                const stripe = await loadStripe('pk_test_51HaNmuJq1n75LKGAq4XCTCzgaORzQalo3pW7Lb2N6IdwOjMInS1BhWG0FBtQyoc0tbVOFiChNZeJgqNbMmt8Oy0j00yYsiBFvt')
                stripe.redirectToCheckout({ sessionId })
            }
        })
    }
    return (
        <div className='plansScreen'>
            <br/>
            {subscription && <p>Renewal date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>}
            {Object.entries(products).map(([productId, productData]) => {
                const isCurrentPlan = productData.name?.includes(subscription?.role)
                console.log(isCurrentPlan)
                return(
                    <div key={productId} className={`${isCurrentPlan && 'plansScreen__plan-disabled'} plansScreen__plan`}>
                        <div className="plansScreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button
                        onClick={() => !isCurrentPlan && loadCheckout(productData.prices.priceId)}>
                            {isCurrentPlan ? 'Current Plan' : 'Subscribe'}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default PlansScreen
