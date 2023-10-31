import { useEffect, useState } from "react";
import axois from "axios";
import './Api.css'

function Api() { 
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => setData(res));
    },[])

    useEffect(() => {
        axois.post('https://jsonplaceholder.typicode.com/posts', {
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
              })
        }).then((res) => {
            console.log(res.data,'>>>>>')
        })
    },[])

    // console.log(data)
    return(
        <>
         <h1>API..</h1>
         <h2>Users List:</h2>

         {
            data.map((data) => (
                <div key={data.id}>
                    <br/>
                    ********************************* 
                    <br/>   
                    <label>Name:- {data.name}</label> {" "}
                    <label>Website:- {data.website}</label> {" "}
                    <label>Email:- {data.email}</label>
                    <label>City:- {data.address.city}</label>
                    <br/>
                    *********************************   
                    <br/>
                </div>
            ))
         }
        </>
    )
}

export default Api;