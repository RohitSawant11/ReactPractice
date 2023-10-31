import { useRef, useState } from "react";

function Calculator(params) {

    const input1Copy = useRef(null);

    const [number, setNumber] = useState({
        input1: 0,
        input2: 0,
        res:0
    });

    // const [result, setResult] =  user

    const calHandler = (action) => {

        switch (action) {
            case "+":
                setNumber({
                    ...number,
                    res: Number(number.input1) + Number(number.input2)
                }) 
                break;
            case "-":
                setNumber({
                    ...number,
                    res: Number(number.input1) - Number(number.input2)
                }) 
                break;
            case "/":
                setNumber({
                    ...number,
                    res: Number(number.input1) / Number(number.input2)
                }) 
                break;
            case "*":
                setNumber({
                    ...number,
                    res: Number(number.input1) * Number(number.input2)
                }) 
                break;
            
            case "reset":
                setNumber({
                    input1: 0,
                    input2: 0,
                    res:0            
                }) 
                break;
            
            default:
                break;
        }
        console.log(action, number);
    }

    const inputHandler = (e) => {
        const {name, value} =  e.target;
        setNumber({
            ...number,
            [name]: value
        })
    }

    const copyHandler = () => {
        input1Copy.current.select();
    }

    return(
        <>
        
        <label htmlFor="input1">Num1</label>
        <input type="number" name="input1" value={number.input1} onChange={inputHandler} ref={input1Copy}/>
        <button onClick={copyHandler}>Copy Num1</button>
        -----------
        <label htmlFor="input2">Num2</label>
        <input type="number" name="input2" value={number.input2} onChange={inputHandler} />
        <button>Copy Num2</button>

        --------------------------------

        <button onClick={() => calHandler("+")} >Add</button>
        <button onClick={() => calHandler("-")}>Sub</button>
        <button onClick={() => calHandler("*")}>Mul</button>
        <button onClick={() => calHandler("/")}>Div</button>

        <button onClick={() => calHandler("reset")}>Reset</button>
        

        <span>{number.res}</span>
        </>
    )
}

export default Calculator;