import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.book_asin,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MThjZGEyNDc4ZDAwMTNhMDU4NjciLCJpYXQiOjE2NzU5NTg5NjMsImV4cCI6MTY3NzE2ODU2M30.Q1jX-HShMVTgkyRHM4th05_jV0PN_rkjeroFWeC2A1M",
        },
      }
    );
    if (res.ok) {
      let body = await res.json();
      console.log(body);
      this.setState({ comments: body });
    } else {
      console.log(res.status, res);
    }
  };

  render() {
    return (
      <>
        <Card.Header className="p-0">COMMENTI</Card.Header>
        <Card>
          {this.state.comments.length > 0 ? (
            <CommentsList comments={this.state.comments} />
          ) : (
            <p>Ancora nessun commento</p>
          )}
          <AddComment />
        </Card>
      </>
    );
  }
}

export default CommentArea;
