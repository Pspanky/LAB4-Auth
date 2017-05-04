import React from 'react';
import PostPreview from './postPreview';

const Posts = (props) => {
  if (props.all.length === 0) {
    return <div> Hello </div>;
  } else {
    console.log('hi');
    return (
      <div className="postsList">
        {props.all.map((post, index) => {
          return <PostPreview id={post.id} cover_url={post.cover_url} tags={post.tags} title={post.title} key={post.id} />;
        })}
      </div>
    );
  }
};

export default Posts;
