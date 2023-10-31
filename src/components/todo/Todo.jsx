import { useState,useEffect } from "react";

function Todo() {

    const [users, setUers] = useState([]);
    const [name, setName] = useState('');




    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        setUers(res)
    });

    }, [])
    
    const delHandler = (id) => {
        setUers(() => {
            return users.filter((data) => data.id !== id)
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();

        if (!name) return;
        const obj = {
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            }
        };
        obj.name = name;
        obj.id = users.length + 1;
        setUers([obj, ...users]);
        setName('')
        // setUers([...users, obj])

    }

    return(
        <>

            <form onSubmit={formSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            <ul>
                { users.length > 0 ?
                    users.map((data) => (
                        <li key={data.id}>
                              {data.name} ...... <button onClick={() => delHandler(data.id)}>DEL</button> 
                        </li>
                    )) : "NO DATA"
                }
            </ul>
        </>
    )
}

export default Todo;