import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { withRouter } from 'react-router-dom';
import { fetchPost, deletePost, updatePost } from '../actions';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.postID,
      content: props.post.content,
      editing: false,
    };

    this.renderContentText = this.renderContentText.bind(this);
    this.changeText = this.changeText.bind(this);
    this.notEditing = this.notEditing.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.state.id);
  }

  onInputChange(event) {
    this.setState({ content: event.target.value });
  }

  deletePost() {
    this.props.deletePost(this.state.id, this.props.history);
  }

  updatePost() {
    this.props.updatePost({ content: this.state.content }, this.state.id);
    this.props.fetchPost(this.state.id);
  }

  notEditing() {
    this.setState({ editing: false });
  }

  startEditing() {
    this.setState({ editing: true });
  }

  changeText() {
    this.updatePost();
    this.notEditing();
  }

  renderContentText(displayText) {
    if (this.state.editing) {
      return (
        <div>
          <textarea type="text" className="editInput" value={this.state.content} onChange={this.onInputChange} />
          <button className="finishEditBtn" onClick={() => this.changeText()}> Done! </button>
        </div>
      );
    } else {
      return (
        <div onClick={() => this.startEditing()}>
          <div className="noteText" dangerouslySetInnerHTML={{ __html: marked(displayText || '') }} />
        </div>
      );
    }
  }

  render() {
    const contentText = this.props.post.content;
    return (
      <div>
        <button className="deleteButton" onClick={() => this.deletePost()}> Delete Note</button>
        <div className="postBody">
          <div className="postImageBox">
            <img className="postImage" src={this.props.post.cover_url} alt="" />
          </div>
          <div className="postText content">
            <h1>{this.props.post.title} </h1>

            <div className="postContent content">
              {this.renderContentText(contentText)}
            </div>
            <div className="content footers">
              <p> <i>Tags: </i>{this.props.post.tags} </p>
              <p> <i> Written by: </i>{this.props.post.author} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    post: state.posts.post,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post));
