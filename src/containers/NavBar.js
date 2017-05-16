import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { signinUser, signupUser, signoutUser } from '../actions';

import '../style.scss';

class NavBar extends Component {


  renderSigns(props) {
    if (this.props.authenticated) {
      return (
        <li>
          <a onClick={() => this.props.signoutUser(this.props.history)} > Sign Out </a>
        </li>
      );
    } else {
      return (
        <ul>
          <li><NavLink to="/signin">Sign In </NavLink></li>
          <li><NavLink to="/signup">Sign Up </NavLink></li>
        </ul>
      );
    }
  }

  render() {
    return (
      <ul className="navList signs">
        {this.renderSigns()}
      </ul>
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
export default withRouter(connect(mapStateToProps, { signinUser, signoutUser, signupUser })(NavBar));
