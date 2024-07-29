import React, { useState } from "react";
import UserComp from "./UserComp";
import { getData } from "../utils/helper";

const AllUsersComp = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [users, setUsers] = useState([]);

    const showAllUsers = async () => {
        let response = await getData(url);
        setUsers([...response]);
    }

    return (
        <div style={{ border: "10px #f094dc88", padding: "50px", background:"#f094dc57", borderRadius: "15px"}}>
            <div>
                <button onClick={showAllUsers}>Show All Users</button> <br />
                <div>
                    {users.map(user => {
                         return <UserComp key={user.id} user={user} url={url} />
                    })}
                </div>
            </div>
        </div>
    )
};

export default AllUsersComp;