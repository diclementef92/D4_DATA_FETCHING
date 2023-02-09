import "./App.css";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import scifiBooks from "./books/scifi.json";

function App() {
  return (
    <div className="App">
      <MyNav items={["Home", "About", "Browse"]} />
      <Container>
        <Welcome text="Francesco" />
        <BookList books={scifiBooks} />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
