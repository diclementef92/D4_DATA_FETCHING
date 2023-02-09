import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  bookClicked = (event) => {
    console.dir(event.target.parentNode);
    this.setState({
      selected: !this.state.selected,
    });
    event.target.parentNode.classList.toggle("card-selected");
  };

  render() {
    return (
      <>
        <div className="card m-2 singlebook">
          <img
            className="card-img-top "
            src={this.props.book.img}
            alt="cover-libro"
            onClick={this.bookClicked}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.book.title}</h5>
            <p className="card-text">{this.props.book.price}€</p>
            <a href="#" className="btn btn-primary">
              Dettagli
            </a>
          </div>
          {this.state.selected && (
            <CommentArea book_asin={this.props.book.asin} />
          )}
        </div>
      </>
    );
  }
}

export default SingleBook;
