import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { createPost } from '../actions';
import '../style.scss';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'This is the title',
      tags: 'these are tags',
      content: 'This is content',
      cover_url: 'cover URL',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onURLChange = this.onURLChange.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
  }

  onURLChange(event) {
    this.setState({ cover_url: event.target.value });
  }

  submitPost() {
    this.props.createPost(this.state, this.props.history);
  }

  render() {
    return (
      <div className="postInputs">
        <input className="Title new_input" type="text" placeholder={this.state.title} onChange={this.onTitleChange} />
        <input className="Tags new_input" type="text" placeholder={this.state.tags} onChange={this.onTagsChange} />
        <input className="Content new_input" type="text" placeholder={this.state.content} onChange={this.onContentChange} />
        <input className="CoverUrl new_input" type="text" placeholder={this.state.cover_url} onChange={this.onURLChange} />
        <button className="submitButton" onClick={() => this.submitPost()}> Make a new Post! </button>
        <NavLink to="/" className="CancelLink">Cancel </NavLink>

      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    title: state.title,
    tags: state.tags,
    cover_url: state.cover_url,
    content: state.content,
  }
);

export default withRouter(connect(mapStateToProps, { createPost })(NewPost));
