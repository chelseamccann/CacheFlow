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

                <section>
                    <img src={window.cash_management} className="cash-management-image" />

                    <div className="investment-types">
                        <div className="stocks">
                            <img src={window.stocks} className="stocks-image" />
                            <h3>Stocks</h3>
                            <p>Invest in companies you love and build out your perfect portfolio.</p>
                        </div>

                        <div className="etfs">
                            <img src={window.etfs} className="etfs-image" />
                            <h3>ETFs</h3>
                            <p>Diversify your holdings by buying into a bundle of stocks in a single investment.</p>
                        </div>
                            
                        <div className="options">
                            <img src={window.options} className="options-image" />
                            <h3>Options</h3>
                            <p>Choose to go long on stocks you believe in and short the ones you don’t.</p>
                        </div>

                        <div className="crypto">
                            <img src={window.cryptos} className="cryptos-image" />
                            <h3>Crypto</h3>
                            <p>Tap into the cryptocurrency market to trade Bitcoin, Ethereum, and more, 24/7.</p>
                        </div>
                    </div>
                    
                </section>
            </div>
        )
    }
}

export default Splash;