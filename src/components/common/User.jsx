function User({
    name,
    email,
    gender,
    age,
    delteHandler,
    userId,
    editHandler
}) {

    const delteclicked = () => {
        delteHandler(userId);
    }

    const editClicked = () => {
        editHandler(userId);
    }

    return (
        <>
            <ul>
                <li>
                    <label>Name: {name}</label>
                    <label>Email: {email}</label> 
                    <label>Age: {age}</label> 
                    <label>Gender: {gender}</label> 
                    <button onClick={delteclicked}>Delete</button>
                    <button onClick={editClicked}>Edit</button>
                </li>
            </ul>
        </>
    )
}

export default User;