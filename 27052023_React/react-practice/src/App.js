import logo from "./logo.svg";
import "./App.css";
import ListStudent from "./components/ListStudent";
import { useState } from "react";

const STUDENTS = [
  {
    name: "Teddy",
    course: "Software Engineer",
    age: 28,
  },
  {
    name: "Rachel",
    course: "Data Scientist",
    age: 25,
  },
  {
    name: "Alberto",
    course: "Network Engineer",
    age: 30,
  },
  {
    name: "Luke",
    course: "Data Engineer",
    age: 24,
  },
];

function App() {
  const [isShow, setShow] = useState(true);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="App">
      <div>
        {/* //Data binding */}
        <input
          type="text"
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p>{value}</p>
      </div>
      {/* //Disable button */}
      <div>
        <input
          type="text"
          placeholder="Enter value"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </div>
      <div>
        <button onClick={() => setShow(!isShow)}>
          {isShow ? "Hide Detail" : "Click to show details"}
        </button>
        {isShow && <ListStudent students={STUDENTS} />}
      </div>
    </div>
  );
}

export default App;
