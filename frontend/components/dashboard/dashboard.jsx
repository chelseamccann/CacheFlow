import React from 'react'

class Dashboard extends React.Component {

    render(){
        return (
            <div>
            <h1>Welcome {this.props.currentUser.username}</h1>
            <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }
}

export default Dashboard;