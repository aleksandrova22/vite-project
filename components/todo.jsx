import {  $todo, addItem, delItem, toggleItem} from '../store/todo';
import { useState } from 'react';
import { useStore } from '@nanostores/react';

export function NanoTodo() {
    console.log('render NanoTodo', Date.now());
    const
    [value, setValue] = useState(''),
        todo = useStore($todo);
      
       
    return <fieldset>
        <legend>Nanostores todo</legend>
        <input value={value} onChange={event => setValue(event.target.value)} />
        <button onClick={()=> addItem({id: Math.random(), text: value, checked: false})}>➕add</button>
      
        <ol>
            {todo.map(({ id, text, checked }) =>
            <li key={id}>
                <input checked={checked} type='checkbox' onChange={()=> toggleItem(id)} />
                {text}
                {checked && '✔'}
                <button onClick={()=> delItem(id)}>❌</button>
            </li>  ) }
        </ol>
 

    </fieldset>

}