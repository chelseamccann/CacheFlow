import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/session_actions'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.history.push('/'))
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {email: "JordanBelfort@w.com", password: "password123", buying_power: 0.00, total_portfolio_value: 0.00}
    debugger
    this.props.processForm(demoUser)
  }

  renderErrors(){
    const err = this.props.errors.map((error, idx) => (
      <li key={idx}>
        {error[idx]}
      </li>
    ))

    return (
      <ul className="errors"> 
      { (err.length>0) ? err : null }
      {/* {this.props.errors.map((error, idx) => (
        <li key={idx}>
          {error[idx]}
        </li>
      ))} */}
      </ul>
    )
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="login-container">
          <div className="login-form-img">
            <img src="https://cdn.robinhood.com/assets/generated_assets/94977d34f99015525dcd0fc9987fcbe6.png"/>
          </div>
          <div className="login-form">
            <h2>Welcome to CacheFlow</h2>
      
            <label>Email or Username</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              required
              autoFocus
              //email field?
              />
            <br/>
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              required
              />

              
            <Link to="/" className="forgot">Forgot your username/password?</Link>
            <div className="login-errors">{this.renderErrors()}</div>



          <div className="lb">
            <input type="submit" value="Sign In" className="login-buttons" />
            <button onClick={this.handleDemo} className="login-buttons">Demo User</button>
          </div>


          
          </div>
        </form>
      </>
    )
  }
}
export default LoginForm;