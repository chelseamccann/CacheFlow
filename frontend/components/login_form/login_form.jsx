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

  render() {
    return (
      <>
        {this.props.errors}
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

          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}
export default LoginForm;