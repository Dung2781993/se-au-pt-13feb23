//  @TODO1 - Convert the components to a functional component using Hooks

import React from 'react';
import Emoji from './components/Emoji';
import Clock from './components/Clock';
import Calculator from './components/Calculator';
import { useState } from 'react';
import Button from '@mui/material/Button';

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
        <Button onClick={toggleMood} variant="contained">Change Mood</Button>
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