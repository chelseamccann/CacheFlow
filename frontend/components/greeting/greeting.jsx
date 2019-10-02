import React from 'react';
import { Link } from 'react-router-dom';

export const Greeting = ({ currentUser, logout }) => {

  const welcome_page = () => {
    return (
      <div className="dashboard">
        {/* <h1>Welcome {currentUser.username}</h1>
        <button onClick={logout}>Log Out</button> */}
        <Link to="/dashboard"></Link>
      </div>
    )
  }
  const splash_page = () => {
    return (
      <div className="splash-page">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    )
  }

  return (
    <header className="nav-bar">
      <h1 className="logo">Cache Flow</h1>
      <div> 
        {currentUser ? welcome_page() : splash_page()}
      </div>
    </header>
  )
}