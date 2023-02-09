import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  state = {};

  render() {
    return (
      <ListGroup.Item>
        <p>{this.props.comment.author}</p>
        <p> {this.props.comment.comment}</p>
        {/* <p> {this.props.comment.updatedAt}</p> */}
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
