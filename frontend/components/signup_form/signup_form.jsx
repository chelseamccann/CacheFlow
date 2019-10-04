import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
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

  checkErrors(error){
    if (this.props.errors.includes(error)){
      return error
    }
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

    const emailError = "Please enter a valid email address.";
    const pwError = "Your password must be at least 10 characters."

    return (
      <>
        <form onSubmit={this.handleSubmit} className="sign-up-container">
          <div className="sign-up-form">
            <div className="money-move">
              <img src={window.rh} className="rh-logo" />
              <h2>Make Your Money Move</h2>
            </div>
            <p>CacheFlow lets you invest in companies you love, commission-free.</p>
            
            <div className="names">
              <input
                type="text"
                value={this.state.firstName}
                onChange={this.update("firstName")}
                placeholder={" First Name"}
                className="inputs fname"
                />



              <input
                type="text"
                value={this.state.lastName}
                onChange={this.update("lastName")}
                placeholder={" Last Name"}
                className="inputs lname"
                />
            </div>

            <p></p>
              <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder={" Email address"}
              className="inputs"
              onClick={this.checkErrors(emailError)}
              />

            <p>{this.checkErrors(pwError)}</p>
              <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder={" Password (min. 10 characters)"}
              className="inputs"
              />

            <div className="login-errors">{this.renderErrors()}</div>
            <input type="submit" value="Continue" className="inputs signup-continue-button"/>
            <p className="started">Already started? <Link className="login" to="/login">Log in to complete your application.</Link></p>
            
          </div>
        </form>
      </>
    )
  }
}
export default SignupForm;