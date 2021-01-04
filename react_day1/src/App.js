import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

const Message = ({ name, yearOfBirth }) => {
  let age = 2021 - yearOfBirth;
  return (
    <h3 className="text-center">
      Hi {name}! You are {age} years old
    </h3>
  );
};

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

// const Fruit = ({ id, value }) => {
//   return (
//     <div>
//       {id} - {value}
//     </div>
//   );
// };
// -------STEP 5: SOLUTION-1----------
// function displayFruits() {
//   return <Container>{arrayOfAllItems}</Container>;
// }

const fruits = [
  { description: "Good.", name: "apple", emoji: "🍎", price: 0.5 },
  { description: "So so.", name: "orange", emoji: "🍊", price: 0.2 },
  { description: "Okay.", name: "grape", emoji: "🍇", price: 1.2 },
  { description: "Excellent", name: "pear", emoji: "🍐", price: 1.5 },
];

// {<Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src="holder.js/100px180" />
// <Card.Body>
//   <Card.Title>Card Title</Card.Title>
//   <Card.Text>
//     Some quick example text to build on the card title and make up the bulk of
//     the card's content.
//   </Card.Text>
//   <Button variant="primary">Go somewhere</Button>
// </Card.Body>
// </Card>}

function App() {
  return (
    <Container>
      <Message name="Boss" yearOfBirth={1900} />
      {/* // -------STEP 5: SOLUTION-3---------- */}
      {/* <Fruit id="haha" value="apple" /> */}
      {/* // -------STEP 6: SOLUTION-1---------- */}
      {/* {allItems.map((item) => (
        <Fruit id={item.id} value={item.value} />
      ))} */}
      {/* // -------STEP 5: SOLUTION-2---------- */}
      {/* {allItems.map((item) => {
        return (
          <div key={item.id}>
            {item.id}
            {item.value}
          </div>
        );
      })} */}

      {/* --------BOOTSTRAP CARDS-------------- */}
      <CardGroup
        class=" text-center"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {fruits.map((item) => {
          return (
            <Card>
              <Card.Body style={{ padding: "1.3rem" }}>
                <Card.Title key={item.name}>
                  {item.name}
                  {item.emoji}
                </Card.Title>
                <Card.Text key={item.description}>{item.description}</Card.Text>
                <Card.Text key={item.price}>${item.price}/kg</Card.Text>
                <Card.Text key={item.description}>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
    </Container>
  );
}

export default App;
