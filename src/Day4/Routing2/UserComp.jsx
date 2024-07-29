import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, Outlet, useParams } from 'react-router-dom';

export const UserComp = () => {
    let { id } = useParams();
    const [user, setUsers] = useState([]);
    useEffect(() => {
        const fetchDataById = async () => {
            let { data: response } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUsers({ ...response });
        }
        fetchDataById();
    })
    return (
        <div>
            <ul>
                <li>Id : {user.id} </li>
                <li>User Name: {user.username} </li>
                <li>Email : {user.email} </li>
                <li>City : {user.address?.city} </li>

                <Link to={`tasks`}>tasks</Link>
                <Outlet />

            </ul>
        </div>
    )
}

export default UserComp;