import { useState } from 'react';
import './App.css';

export type ToDo = { id: number; text: string };


export class ToDoItem {

  id = Math.random();

  constructor(text: string) {
    Object.assign(this, { text });
  }

}

function App() {
  const [count, setCount] = useState(0),
    [value, setValue] = useState(''),
    [list, setList] = useState([]);


  return <>
    <h2>Vite + React</h2>
    <fieldset>
      <legend>Counter</legend>
      <button onClick={() => setCount((count) => count + 1)}>
        Count {count}
      </button>
    </fieldset>

    <fieldset>
      <legend>Todo</legend>
      <input value={value} onChange={event => setValue(event.target.value)} />

      <button onClick={() => setList([...list, new ToDoItem(value)])}>➕add</button>

      <ol>
        {[...list].map(({ id, text }) => <li key={id}>

          {text}

          <button onClick={(id) => setList(list.filter(elem => elem.id !== id))}>❌</button>
        </li>)

        }


      </ol>


    </fieldset>

  </>

}

export default App
