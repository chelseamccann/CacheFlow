import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard'

export const Greeting = ({ currentUser, logout }) => {

  const dashboard = () => {
    return (
      <>
        {/* <h1>Welcome {currentUser.username}</h1>
        <button onClick={logout}>Log Out</button> */}
        <Dashboard currentUser={currentUser} logout={logout} />
      </>
    )
  }
  const splash_page = () => {
    return (
      <div className="splash">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    )
  }

  return (
    <header className="nav-bar">
      <h1 className="logo">Cache Flow</h1>
      <div> 
        {currentUser ? dashboard() : splash_page()}
      </div>
    </header>
  )
}