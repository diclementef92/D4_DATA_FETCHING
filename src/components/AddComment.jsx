import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Chat } from "react-bootstrap-icons";

class AddComment extends Component {
  state = {
    email: "",
    comment: "",
    rate: 0,
  };

  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  updateComment = (e) => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-1" controlId="form.control.mail">
              <Form.Control
                type="email"
                placeholder="la tua mail"
                onChange={(e) => this.updateEmail(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.control.comment">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="dicci cosa ne pensi"
                onChange={(e) => this.updateComment(e)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default AddComment;
// <Form onSubmit={this.addComment}>
//   <Form.Group>
//     <Form.Control type="text" placeholder="la tua email" name="email" />
//     <Form.Control
//       type="text"
//       placeholder="il tuo commento"
//       name="comment"
//     />
//     <Button>invia</Button>
//   </Form.Group>

//   {/* <Chat onClick={() => this.addComment()} className="bi bi-chat"></Chat> */}
// </Form>
