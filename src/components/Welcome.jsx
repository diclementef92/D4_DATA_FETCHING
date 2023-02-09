import { Component } from "react";

class Welcome extends Component {
  render() {
    // console.log(this.props.text);
    return (
      <div className="jumbotron">
        <h1 className="display-4">Benvenuto {this.props.text}!</h1>
        <p className="lead">Compra e vendi libri</p>
      </div>
    );
  }
}

export default Welcome;
