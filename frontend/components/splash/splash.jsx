import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render(){
        return (
            <div className="splash">

                {/*********************************************/}
                <div className="splash-nav">

                    <div className="splash-header">
                        {/* <div className="logo">cacheflow</div> */}
                        <ul className="personal-buttons">
                            <li><img src={window.rh} className="nav-left logo" /></li>
                            <li> 
                                
                                <Link to="/" className="nav-left">cacheflow</Link>
                            </li>
                            <li><a href="" className="nav-left">Personal</a></li>
                            <li><a href="" className="nav-left"><img src={window.github} className="github" /></a></li>
                            <li><a href="" className="nav-left"><img src={window.linkedin} className="linkedin" /></a></li>
                        </ul>
                    </div>

                    <div className="nav-links">
                        <ul>
                            <li><Link to="/login" className="login-button">Log In</Link></li>
                            <li><Link to="/signup" className="signup-button">Sign Up</Link></li>
                        </ul>

                    </div>
                    {/*********************************************/}

                </div>
                <section className="invest-intro">
                    <div className="invest-intro-text">
                        <h1>Invest Commission-Free</h1>
                        <p>Invest in stocks, ETFs, options, and cryptocurrencies, all commission-free, right from your phone or desktop</p>
                        <Link to="/signup" className="signup-button">Sign Up</Link>
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


                <section className="no-manual">
                    <img src={window.manual} className="no-manual-image" />
                    <div className="no-manual-text">
                        <h3>No Manual Needed</h3>
                        <p>Intuitively designed for newcomers and experts alike, Robinhood gives you a clear picture of your portfolio’s performance over time, so you can adjust your positions and learn by doing.</p>
                    </div>
                </section>


                <section className="phones">
                    <img src={window.phones} className="phones-image" />
                    <div className="phones-text">
                        <h3>Next Level Investing</h3>
                        <p>Access professional research reports, trade on margin, and make bigger instant deposits with Robinhood Gold—all starting at $5 a month.</p>
                    </div>
                </section>

                <section className="market">
                    <div className="market-text">
                        <h3>Keep Tabs on the Market</h3>
                        <p>Access tools and features such as price movement notifications and customized investment news so you can find the right moment to invest.</p>
                    </div>
                    <img src={window.market} className="market-image" />
                </section>


                <section className="sipc">
                    <img src={window.sipc} className="sipc-image" />
                    <div className="sipc-text">
                        <h3>Trusted by Millions in the USA</h3>
                        <p>Robinhood is a member of SIPC, which protects securities customers of its members up to $500,000 (including $250,000 for claims for cash). Explanatory brochure available upon request or at www.sipc.org.</p>
                    </div>
                </section>

                <section className="get-started">
                    <div className="get-started-text">
                        <h3>Get Started</h3>
                        <p>It only takes a few minutes to take control of your financial future. Sign up now to start investing with Robinhood.</p>
                    </div>
                    <Link to="/signup" className="signup-button-bottom">Sign Up</Link>
                </section>
            </div>
        )
    }
}

export default Splash;