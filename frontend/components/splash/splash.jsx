import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render(){
        return (
            <div className="splash">

                {/*********************************************/}
                <div className="splash-nav">

                    <div className="splash-header">
                        <div className="logo">cacheflow</div>
                        <ul className="personal-buttons">
                            <li><a href="" className="nav-left">Personal</a></li>
                            <li><a href="" className="nav-left">Github</a></li>
                            <li><a href="" className="nav-left">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div className="nav-links">
                        <ul>
                            <li><Link to="/login" className="login-button">Log In</Link></li>
                            <li><Link to="/signup"><button className="signup-button">Sign Up</button></Link></li>
                        </ul>

                    </div>
                    {/*********************************************/}

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
                    <img src={window.splash} className="phone-image" />
                </section>
            </div>
        )
    }
}

export default Splash;