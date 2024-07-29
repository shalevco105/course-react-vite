import React, { useState } from 'react'
import AllUsers from './AllUsers';
import { useDispatch } from 'react-redux';

export const User = () => {
    const [newUser, setNewUser] = useState({ id: 0, fname: '', lname: '', age: 0 });

    const dispatch = useDispatch();

    const setUserDetails = (e) => {
        let { name, value } = e.target;
        setNewUser({ ...newUser, [name]: name == "age" || [name] == "id" ? +value : value });
    }

    const createUser = () => {
        dispatch({ type: "CREATE", payload: newUser });
    }

    const updateUser = () => {
        if (newUser.id == 0 || newUser.age == 0 || newUser.fname == '' || newUser.lname == '') {
            alert("Please fill all fields");
        }
        else {
            dispatch({ type: "UPDATE", payload: newUser })
        }
    }
    return (
        <div style={{ border: "10px #f094dc88", padding: "50px", background: "#f094dc57", borderRadius: "15px" }}>
            <input type="text" name="id" placeholder="Enter ID" onChange={setUserDetails} />
            <input type="text" name="fname" placeholder="Enter First Name" onChange={setUserDetails} />
            <input type="text" name="lname" placeholder="Enter Last Name" onChange={setUserDetails} />
            <input type="text" name="age" placeholder="Enter Age" onChange={setUserDetails} />

            <button type="button" onClick={createUser}> Create New User </button>
            <button type="button" onClick={updateUser}> Update Existing User </button>

            <div>
                <AllUsers />
            </div>
        </div>
    )
}

export default User;