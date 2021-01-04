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
      {/* <Fruit id="haha" value="apple" /> */}
      {allItems.map((item) => (
        <Fruit id={item.id} value={item.value} />
      ))}
      {/* {allItems.map((item) => {
        return (
          <div key={item.id}>
            {item.id}
            {item.value}
          </div>
        );
      })} */}
    </Container>
  );
}

const allItems = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

// const arrayOfAllItems = allItems.map((item) => {
//   return (
//     <div key={item.id}>
//       {item.id}
//       {item.value}
//     </div>
//   );
// });

const Fruit = ({ id, value }) => {
  return (
    <div>
      {id} - {value}
    </div>
  );
};

// function displayFruits() {
//   return <Container>{arrayOfAllItems}</Container>;
// }

export default App;
