import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import '../Style/HomeScreen.css'

function HomeScreen() {
    return (
        <div className='homeScreen'>
            {/* Nav */}
            <Nav />
            {/* Banner */}
            <Banner />
            {/* Rows */}

        </div>
    )
}

export default HomeScreen
