import React, { useState } from "react";

export const RepeaterComp = () => {
    const [users, setUsers] = useState([{ fname: 'Maya', age: 23 }, { fname: 'Dana', age: 6 }]);
    const [user, setUser] = useState([{ fname: '', age: 0 }]);

    const addUserToArr = () => {
        if (users.fname = "" || users.age == 0) {
            alert('Please enter valid details');

        } else {
            setUsers([...users, user]);
        }
    };

    return (
        <div>
            {
                users.map((user, index) => {
                    return (<ul key={index}>
                        <li key={index}>Name: {user.fname}, Age: {user.age}</li>
                    </ul>)
                })
            }

            <div>
                <div>
                    <input type="text" onChange={(e) => setUser({ ...user, fname: e.target.value })} placeholder="Enter first name" /> <br />
                    <input type="text" onChange={(e) => setUser({ ...user, age: +e.target.value })} placeholder="Enter your age" /> <br />
                </div>
                <button onClick={addUserToArr}>Add User</button>
            </div>
        </div>
    )
};