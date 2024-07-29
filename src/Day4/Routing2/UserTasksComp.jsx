import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const UserTasksComp = () => {
    let { id } = useParams();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchUserTasksById = async () => {
            let { data: response } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
            setTasks([ ...response ]);
        }
        fetchUserTasksById();
    })

    return (
        <div>
            <div>
                {
                tasks.map((task, index) => {
                    return (
                    <p key={index}> {task.title} {task.completed} 

                    </p>)
                })
                }
            </div>
        </div>
    )
}

export default UserTasksComp;