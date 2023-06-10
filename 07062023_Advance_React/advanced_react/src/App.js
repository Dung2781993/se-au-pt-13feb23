//Example of built-in hook on React => all the provided hooks from react
import { useState, useEffect } from "react";
import "./App.css";

const happy = '😄';
const sad = '😢';

function App() {
  const [count, setCount] = useState(0); //Use built-in hook called useState to initialise the count value
  const [mood, setMood] = useState(happy);

  const counting = () => {
    setCount(count + 1);
  };

  const toggleMood = () => {
    const newMood = mood === happy ? sad : happy;
    setMood(newMood);
  }

  return (
    <div className="App">
      <p>Number of clicks: {count}</p>
      <button onClick={() => counting()}>Click me :D</button>
      <p>{mood}</p>
      <button onClick={() => toggleMood()}>Change Mood</button>
    </div>
  );
}

export default App;
