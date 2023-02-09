import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  state = {};

  render() {
    return <ListGroup.Item>{this.props.comment.comment}</ListGroup.Item>;
  }
}

export default SingleComment;
