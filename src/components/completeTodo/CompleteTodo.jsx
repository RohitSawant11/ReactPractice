import { useReducer } from 'react';
import './CompleteTodo.css'
import { useState } from 'react';

function CompleteTodo() {

    const formReducer = (state, action) => {
        console.log(action);

        switch (action.type) {
            case "update":
                console.log(action);
                return {...state, [action.name] : action.value}
            case "reset":
                return { ...initialState }
            // case "edit":
            //     const 
            //     return {  }
        
            default:
                return state;
        }

    }
    const initialState = {
        firstName: '',
        lastName: '',
        age: '',
        phone: '',
        email: '',
        id: '',
    }
    const [formData, dispatch] = useReducer(formReducer, initialState);
    const [users, setUsers] = useState([]);
    const [editingUserId, setEditingUserId] = useState(false);
    const [count, setCount] = useState(1);


    const submitHandler = (e) => {
        e.preventDefault();
        if (editingUserId) {
            setUsers(() => {
                return users.map((data) => data.id === formData.id ? {...formData} : data)
            });
            setEditingUserId(false);
        } else {
            formData.id = count;
            setUsers([...users, formData]);
        }
        
        dispatch({type: 'reset'});
        setCount(count + 1);
    }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        dispatch({ type:"update", name:name, value: value });
    }

    const deleteHandler = (id) => {
        setUsers(() => {
            return users.filter((data) => data.id !== id)
        })
    }

    const editHandler = (user) => {
        setEditingUserId(true)
        dispatch({ type: 'update', name: 'firstName', value: user.firstName });
        dispatch({ type: 'update', name: 'lastName', value: user.lastName });
        dispatch({ type: 'update', name: 'age', value: user.age });
        dispatch({ type: 'update', name: 'phone', value: user.phone });
        dispatch({ type: 'update', name: 'email', value: user.email });
        dispatch({ type: 'update', name: 'id', value: user.id });

    }

    return (
        <div className='main-container'>
            <form onSubmit={submitHandler}>
                <div className='label-input-wrapper'>

                    <label htmlFor="firstName">FirstName</label>
                    <input  required type="text" name='firstName' id='firstName' value={formData.firstName} onChange={changeHandler} />
                </div>


                <div className='label-input-wrapper'>
                    <label htmlFor="lastName">LastName</label>
                    <input required type="text" name='lastName' id='lastName' value={formData.lastName} onChange={changeHandler} />
                </div>

                <div className='label-input-wrapper'>
                    <label htmlFor="age">Age</label>
                    <input required type="text" name='age' id='age' value={formData.age} onChange={changeHandler} />
                </div>


                <div className='label-input-wrapper'>
                    <label htmlFor="phone">Phone</label>
                    <input required type="text" name='phone' id='phone' value={formData.phone} onChange={changeHandler} />
                </div>

                <div className='label-input-wrapper'>
                    <label htmlFor="email">Email</label>
                    <input required type="email" name='email' id='email' value={formData.email} onChange={changeHandler} />
                </div>

                <button type='submit'>Submit</button>
            </form>

            <div>
                <h2>Display Users</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>Action</th>

                        </tr>
                            {
                                users && users.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.firstName} {data.lastName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.age}</td>
                                        <td>{data.phone}</td>
                                        <td>
                                            <button onClick={() => deleteHandler(data.id)}>Del</button>
                                            ....
                                            <button onClick={() => editHandler(data)}>Edit</button>
                                        </td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CompleteTodo;