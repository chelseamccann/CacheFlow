import React from 'react';
import { Link, Route } from 'react-router-dom';
import Search from '../search/search';

class NavBar extends React.Component {

    drop(e){
        e.preventDefault();
        document.getElementById("drop-down-id").classList.toggle("show");
        document.getElementById("drop-down-id").classList.toggle("drop-down-content");
    }

    render(){
        
        return (
        <div className="dash">

                <ul className="dash-nav">
                    <div className="dash-left">
                        <li><img src={window.rh} /></li>
                        <li><Search /></li>
                    </div>
                    <div className="dash-right">
                        <div className="drop-down" >
                            <a href="" className="right-right">Home</a>
                            <button  className="drop-down-button">Messages</button>
                            <button onClick={this.drop} className="drop-down-button">Account</button>
                            <div className="drop-down-content" id="drop-down-id">
                                {/* <div className="drop">Portfolio Value: {this.props.currentUser.total_portfolio_value}</div> */}
                                <div className="drop"><b className="title">Buying Power:</b> {`$${parseFloat(this.props.currentUser.buying_power).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`}</div>
                                {/* <div className="drop">History</div> */}
                                <div></div>
                                <div className="drop drop-logout">
                                    <Link to="/"><button className="drop-down-button nav-bar-logout" onClick={this.props.logout}><b className="title">Log Out</b></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                </ul>
            {/* </div> */}

        </div>
        )
    }
}

export default NavBar;