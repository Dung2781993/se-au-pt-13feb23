//  @TODO1 - Convert the components to a functional component using Hooks

import React from 'react';
import Emoji from './components/Emoji';
import Clock from './components/Clock';
import Calculator from './components/Calculator';
import { useState } from 'react';

const happy = '😄';
const sad = '😢';

const App = () => {
  const [mood, setMood] = useState(happy);

  const toggleMood = () => {
    const newMood = mood === happy ? sad : happy;
    setMood(newMood);
  }

  return (
    <div>
      <div>
        <Emoji symbol={mood} label="mood" />
        <button onClick={toggleMood}>
          Change Mood
        </button>
      </div>

      <br />
      <div>
        <Calculator />
      </div>
      <br />

      <div>
        <Clock />
      </div>
    </div>
  );
}

export default App;