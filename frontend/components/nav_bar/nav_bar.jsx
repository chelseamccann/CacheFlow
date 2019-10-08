import React from 'react';
import { Link, Route } from 'react-router-dom';

class NavBar extends React.Component {
    
    drop(e){
        e.preventDefault();
        document.getElementById("drop-down-id").classList.toggle("show");
        document.getElementById("drop-down-id").classList.toggle("drop-down-content");
    }

    render(){

        return (
        <div className="dash">

            <div className="dash-header">
                {/* <div className="logo">cacheflow</div> */}
                <ul className="dash-nav">
                    <li><a href="" className="nav-left"><img src={window.rh} className="nav-left logo" /></a></li>

                    <div className="dash-left">
                        <li><a href="" className="nav-left">Home</a></li>
                        <li>Messages</li>
                        <div className="drop-down" >
                            <button onClick={this.drop} className="drop-down-button">Account</button>
                            <div className="drop-down-content" id="drop-down-id">
                                <div className="drop">Portfolio Value</div>
                                <div className="drop">Buying Power</div>
                                <div className="drop">History</div>
                                <div className="drop">
                                    <Link to="/"><button onClick={this.props.logout}>Log Out</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                </ul>
            </div>

        </div>
        )
    }
}

export default NavBar;