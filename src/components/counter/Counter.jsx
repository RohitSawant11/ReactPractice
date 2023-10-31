import { useState } from "react";

function Counter() {

const [counter, setCounter] = useState(0);

const setCounterhandler = (action) => {
    if(action === '-') {
        setCounter(counter - 1)
    } else {
        setCounter(counter  + 1)
    };
}

 return(
    <>
        <h1>Counter</h1>
        <p>Counter: {counter}</p>
        <button disabled={counter > 9} onClick={() => setCounterhandler("+")} >Add</button>
        <button disabled={counter < 1}onClick={() => setCounterhandler("-") }>Sub</button>

    </>
 )   
}

export default Counter;