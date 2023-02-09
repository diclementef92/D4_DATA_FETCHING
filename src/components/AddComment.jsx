import { Component } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { Chat } from "react-bootstrap-icons";

class AddComment extends Component {
  state = {
    comment: {
      email: "",
      text: "",
      rate: 0,
    },
  };

  addComment = (e) => {
    console.log(e.target);
  };

  render() {
    return (
      <InputGroup>
        {/* <InputGroup.Text></InputGroup.Text> */}
        <Form.Control
          type="text"
          placeholder="il tuo commento"
          aria-label="comment"
          id="commentForm"
        />
        <Chat onClick={this.addComment} className="bi bi-chat"></Chat>
      </InputGroup>
    );
  }
}

export default AddComment;
