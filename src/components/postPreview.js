import React from 'react';
import { NavLink } from 'react-router-dom';


const PostPreview = (props) => {
  return (
    <div className="postPreview">
      <NavLink to={`/posts/${props.id}`}>
        <img alt=" "className="previewTop" src={props.cover_url} />
        <div className="previewBottom">
          <div>
            <b> {props.title} </b>
          </div>
          <div>
            {props.tags}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default PostPreview;
