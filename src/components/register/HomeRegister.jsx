import { useState,useEffect } from "react";
import DisplayList from "./DIsplayList";
import Register from "./Register";

function HomeRegister() {
    const [userList, setUserList] = useState([]);

    const handleUserList = (data) => {
        setUserList([...userList, data]);
    }
    
    return(
        <>
        <Register userListHandler={handleUserList} ></Register>
        <DisplayList users={userList}></DisplayList>
        </>

    )
}

export default HomeRegister;