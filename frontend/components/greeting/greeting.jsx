import React from 'react';
import { Link } from 'react-router-dom';

export const Greeting = ({ currentUser, logout }) => {

  const welcome_page = () => {
    return (
      <div>
        <h1>Welcome {currentUser.username}</h1>
        <button onClick={logout}>Log Out</button>
      </div>
    )
  }
  const splash_page = () => {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    )
  }

  return currentUser ? welcome_page() : splash_page();
}