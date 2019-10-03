import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render(){
        return (
            <div className="splash">
                <div className="splash-nav">
                    <div className="splash-header">
                        CacheFlow
                    </div>
                    <div className="nav-links">
                        {/* <ul> */}
                        <div className="personal-buttons">
                            <ul>
                                <li><a href="">Personal</a></li>
                                <li><a href="">Github</a></li>
                                <li><a href="">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="login-signup-buttons">
                            <ul>
                                <li><Link to="/login">Log In</Link></li>
                                <li><Link to="/signup"><button className="signup-button">Sign Up</button></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="invest-intro">
                    <div className="invest-intro-text">
                        <h1>Invest Commission-Free</h1>
                        <p>Invest in stocks, ETFs, options, and cryptocurrencies, all commission-free, right from your phone or desktop</p>
                        <Link to="/signup">
                            <input type="submit" className="signup-button" value="Sign Up"/>
                        </Link>
                        {/* <p>Commissions Disclosure</p> */}
                    </div>

                    <img src="https://cdn.robinhood.com/assets-about/a4a80e964c803ddb7a9fc7459e0eac01.png" className="phone-image" alt=""/>
                </section>
            </div>
        )
    }
}

export default Splash;