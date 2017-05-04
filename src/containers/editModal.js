import React, { Component } from 'react';

class EditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  onInputChange(event) {
    this.setState({ content: event.target.value });
  }

  finishEdit() {
    this.props.changeText(this.state.content);
    this.props.stopEdit();
  }

  render() {
    return (
      <div className="editModal">
        <textarea type="text" className="editInput" value={this.state.content} onChange={this.onInputChange} />
        <button className="finishEditBtn" onClick={() => this.props.changeText(this.state.content)}> Done! </button>
      </div>
    );
  }
}

export default EditModal;
