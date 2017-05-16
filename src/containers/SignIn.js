import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signinUser } from '../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchPost(this.state.id);
  // }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  signInUser() {
    const email = this.state.email;
    const password = this.state.password;
    this.props.signinUser({ email, password }, this.props.history);
  }

  render() {
    return (
      <div className="SignInForms">
        <input className="SignInForm" type="text" placeholder="Enter Email" onChange={this.onEmailChange} />
        <input className="SignInForm" type="text" placeholder="Enter Password" onChange={this.onPasswordChange} />
        <button className="SignInButton" onClick={() => this.signInUser()} > Sign In </button>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

// react-redux glue -- outputs Container that knows how to call actions
  // new way to connect with react router 4
export default withRouter(connect(mapStateToProps, { signinUser })(SignIn));
