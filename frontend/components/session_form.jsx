import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <>
        {this.props.errors}
        <form onSubmit={this.handleSubmit}>
          <h2>{this.props.formType}</h2>
          <input
            type="text"
            value={this.state.email}
          />

          <input
            type="text"
            value={this.state.password}
          />

          <Link to={`/${this.props.formType}`}>{this.props.formType}</Link>

          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}
export default SessionForm;