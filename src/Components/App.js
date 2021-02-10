import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import ProfileScreen from './ProfileScreen'
import { auth } from '../API/firebase'
import '../Style/App.css';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from '../features/userSlice'

function App() {
  const user = useSelector(selectUser); 
  const dispatch = useDispatch()

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])
  return (
    <div className="app">
      <Router>
        {!user ? (
        <LoginScreen />
        ) : (
        <Switch> 
          <Route path='/profile'>
            <ProfileScreen />
          </Route>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
