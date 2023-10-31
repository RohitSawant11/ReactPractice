import { useRef, useState, useEffect, useReducer } from "react";

function Register({userListHandler}) {

    const formReducer = (state, action) => {
        console.log("hererer",action)
        switch (action.type) {
            case "CHANGE":
                return {...state, [action.fieldName] : action.value}
        
            default:
                return state;
        }
    }
    const initialState = { firstName:"",lastName:"", phone:'' }
    const [formData, dispatch] = useReducer(formReducer,initialState)
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [phone, setPhone] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.firstName,formData.lastName, formData.phone) {
            const user = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
            }
            userListHandler(user);
        }
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">FirstName</label>
                <input type="text" name="firstName"  value={formData.firstName}
                onChange={(e) => dispatch({type:'CHANGE', fieldName:'firstName' ,  value:e.target.value})}
                />


                <label htmlFor="lastName">LastName</label>
                <input type="text" name="lastName" value={formData.lastName}  onChange={(e) => dispatch({type:'CHANGE', fieldName:'lastName' ,  value:e.target.value})}/>

                <label htmlFor="phone">PhoneNumber</label>
                <input type="text" name="phone" value={formData.phone} onChange={(e) => dispatch({type:'CHANGE', fieldName:'phone' ,  value:e.target.value})} />

                <button type="submit">Add User</button>
            </form>
        </>
    )
}

export default Register;