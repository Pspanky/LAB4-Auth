import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { createPost } from '../actions';

const SubmitPost = (props) => {
  return (
    <div>
      <button onClick={props.createPost} className="submitPost">New Post</button>
    </div>
  );
};

// react-redux glue -- outputs Container that knows how to call actions
  // new way to connect with react router 4
export default withRouter(connect(null, { createPost })(SubmitPost));
