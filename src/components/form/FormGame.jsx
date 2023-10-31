import { useState } from "react";
import User from "../common/User";

function FormGame() {

    const [userList, setUserList] = useState([]);

    const [editingUser, seteditingUser] = useState(null);

    const [formData, setFormdata] = useState({
        name: '',
        age: 0,
        email: '',
        gender: 'Male',
    });

    const genderArray = ['Male', 'Female', 'Other'];

    const submitHandler = (e) => {
        e.preventDefault();

        if (editingUser ===  null ) {
            setUserList([...userList, formData]);
        } else {
            let prevList = [...userList];
            prevList[editingUser] = formData;
            setUserList(prevList);
            seteditingUser(null); 
        }




        setFormdata({
            name: '',
            age: 0,
            email: '',
            gender: 'Male',
          });
       
    }

    const setFromDataHandler = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formData,
            [name]: value
        })
    }

    const delteHandler = (userId) => {
        const updatedUserList = userList.filter((user, i) => i !== userId);
        setUserList(updatedUserList);
    };

    const editHandler = (userId) => {
        seteditingUser(userId);
        setFormdata(userList[userId]);
    };

    return (
        <>
            <div>

                <h1>FORM</h1>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={setFromDataHandler} />

                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" value={formData.age} onChange={setFromDataHandler} />

                    <label htmlFor="email">email:</label>
                    <input type="email" name="email" value={formData.email} onChange={setFromDataHandler} />

                    <label htmlFor="gender">Gender:</label>
                    <select name="gender" defaultValue={formData.gender} onChange={setFromDataHandler}>
                        {
                            genderArray.map((val, i) => (
                                <option key={i} value={val}>{val}</option>
                            ))
                        }
                    </select>

                    <button type="submit">Submit</button>
                </form>


                <div>
                    <h3>User's List</h3>
                    {
                        userList.map((data,i) => (
                            <User
                                key={i} 
                                name = {data.name} 
                                email={data.email} 
                                age={data.age} 
                                gender={data.gender} 
                                userId={i}
                                delteHandler = {delteHandler}
                                editHandler = { editHandler}
                                />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default FormGame;