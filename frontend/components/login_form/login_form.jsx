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
        <form onSubmit={this.handleSubmit}>
          <h2>{this.props.formType}</h2>

          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            />
          <br/>
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            />

          {this.renderErrors()}
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}
export default LoginForm;