import React from 'react'

class Dashboard extends React.Component {

    render(){
        return (
            <>
            <h1>Welcome {this.props.currentUser.username}</h1>
            <button onClick={this.props.logout}>Log Out</button>
            </>
        )
    }
}

export default Dashboard;