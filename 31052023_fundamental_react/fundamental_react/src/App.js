import "./App.css";
import { useState } from 'react';

const TodoList = () => {
  const [listTodo, setListTodo] = useState([]);
  const [input, setInput] = useState(''); 

  const handleInputChange  = (event) => {
    setInput(event.target.value)
  }

  const addTodo = () => {
    if (input.trim().length > 0) {
      setListTodo([...listTodo, input.trim()]);
      //Reset the input
      setInput('')
    }
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {
          listTodo.map(item => {
            return (
              <li key={item.toString()}>
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}


const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default App;
