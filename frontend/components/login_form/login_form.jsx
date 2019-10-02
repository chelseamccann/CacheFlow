import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  renderErrors(){
    return (
      <ul className="errors"> 
      {this.props.errors.map((error, idx) => (
        <li key={idx}>
          {error[idx]}
        </li>
      ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="login-container">
          <div className="login-form-img"><img src="https://cdn.robinhood.com/assets/generated_assets/94977d34f99015525dcd0fc9987fcbe6.png"/></div>
          <div className="login-form">
            <h2>Welcome to Robinhood</h2>

            <label>Email or Username</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              // placeholder={" Email"}
              />
            <br/>
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              // placeholder={" Password"}
              />
            <a href="">Forgot your username/password?</a>
            {this.renderErrors()}
            <input type="submit" value="Submit" />
          </div>
        </form>
      </>
    )
  }
}
export default LoginForm;