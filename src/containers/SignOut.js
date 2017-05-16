import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signoutUser, fetchPosts } from '../actions';


const SignOut = (props) => {
  return (
    <div className="signOutLink">
      <a onClick={() => { props.signoutUser(props.history); props.fetchPosts(); }} > Sign Out </a>
    </div>
  );
};

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

// react-redux glue -- outputs Container that knows how to call actions
  // new way to connect with react router 4
export default withRouter(connect(mapStateToProps, { signoutUser, fetchPosts })(SignOut));
