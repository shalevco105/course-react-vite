import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export const UsersComp = () => {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let { data: response } = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers([...response]);
        };
        fetchData();
    })
    return (
        <div>
            {
                user.map(user => {
                    return (
                        <div key={user.id}>
                            <Link to={`${user.id}`}>{user.username}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UsersComp;