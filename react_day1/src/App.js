import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const Message = ({ name, yearOfBirth }) => {
  let age = 2021 - yearOfBirth;
  return (
    <h3 className="text-center">
      Hi {name}! You are {age} years old
    </h3>
  );
};

function App() {
  return (
    <Container>
      <Message name="Boss" yearOfBirth={1900} />
    </Container>
  );
}

export default App;
