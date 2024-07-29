import React, { useEffect, useState } from 'react'
import { getDataById, updateData } from '../utils/helper';

export const ParentComp = () => {

    const [currentNum, setCurrentNum] = useState("");
    const [user, setUser] = useState({});

    const URL = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        async function getUser() {
            let response = await getDataById(URL, currentNum);
            console.log(response);
            setUser({ ...response });
        };
        getUser();

    }, [currentNum])

    const updateUser = async () => {
        let response = await updateData(URL, user.id, user);
        console.log(response);
    }
    const updateUserDetails = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    return (
        <div style={{ border: "10px #b281eb48", padding: "50px", background: "#b281eb48", borderRadius: "15px", margin: "10px" }}>
            <input type="text" onChange={(e) => { setCurrentNum(e.target.value) }} placeholder="Enter A number between 1 and 10" />  <br />
            <input type="text" value={user.username} placeholder="username" name='username' onChange={updateUserDetails} /> <br />
            <input type="text" value={user.name} placeholder="name" name='name' onChange={updateUserDetails} />  <br />
            <input type="text" value={user.email} placeholder="email" name='email' onChange={updateUserDetails} /> <br />
            <button onClick={updateUser}>Update</button>
        </div >
    )
}


export default ParentComp;
