import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signoutUser } from '../actions';

const SignOut = (props) => {
  return (
    <a onClick={() => props.signoutUser(props.history)} > Sign Out </a>
  );
};

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

// react-redux glue -- outputs Container that knows how to call actions
  // new way to connect with react router 4
export default withRouter(connect(mapStateToProps, { signoutUser })(SignOut));
