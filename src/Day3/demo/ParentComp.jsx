import axios from 'axios';
import React, { useState } from 'react';
import ChildComp from './ChildComp';

export const ParentComp = () => {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        let { data: response } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers([...response]);
    }
    return (
        <div>
            <h1>
                HTTP REQUEST
            </h1>
            <div>
                <button onClick={getData}>Fetch Data</button>
            </div>
            <div>
                {users.map(user => {
                    return <ChildComp key={user.id} user={user} />
                })}
            </div>
        </div>
    )
} 