import React from 'react';
import { Link } from 'react-router-dom'

export const Greeting = ({ currentUser, logout }) => {

  const logged_in = () => {
    return (
      <>
        <h1>Welcome {currentUser.username}</h1>
        <button onClick={logout}>Log Out</button>
      </>
    )
  }
  const logged_out = () => {
    return (
      <>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </>
    )
  }

  return currentUser ? logged_in() : logged_out();
}