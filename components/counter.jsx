import { useState } from 'react';


export function Counter() {
    console.log('render Counter', Date.now());

    const [count, setCount] = useState(0);

    return <fieldset>
        <legend>Counter</legend>
        <button onClick={() => setCount((count) => count + 1)}>
            Count {count}
        </button>

    </fieldset>

}