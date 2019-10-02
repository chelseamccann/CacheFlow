import React from 'react';
import { Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard'
import Splash from '../splash/splash'

export const Greeting = ({ currentUser, logout }) => {

  const dashboard = () => {
    return <Dashboard currentUser={currentUser} logout={logout} />
  }

  const splash_page = () => {
    return (
      <div className="splash">
        <Route exact path="/" component={Splash}/>
      </div>
    )
  }

  return (
    <header className="nav-bar">
      <div> 
        {currentUser ? dashboard() : splash_page() }
      </div>
    </header>
  )
}