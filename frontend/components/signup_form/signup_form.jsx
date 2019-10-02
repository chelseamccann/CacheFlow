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
        <form onSubmit={this.handleSubmit}>
          <h2>{this.props.formType}</h2>
          <label>First Name</label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.update("firstName")}
            placeholder={" Last Name"}
            />
          <br />
          <label>Last Name</label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.update("lastName")}
            placeholder={" First Name"}
            />
          <br />
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder={" Email"}
            />
          <br />
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder={" Password"}
            />

          {this.renderErrors()}
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}
export default SignupForm;