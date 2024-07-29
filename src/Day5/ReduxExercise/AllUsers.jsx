import React from 'react'
import AdultUsers from './AdultUsers';
import { useDispatch, useSelector } from 'react-redux';

export const AllUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const deleteUser = (id) => {
        dispatch({ type: "DELETE", payload: id });
    }

    return (
        <div style={{ border: "10px #b281eb48", padding: "50px", background: "#b281eb48", borderRadius: "15px", margin: "10px" }}>
            <div>
                {users.map(user => {
                    return (
                        <ul key={user.id}>
                            <li> {user.fname}   </li>
                            <li> {user.lname}   </li>
                            <li> {user.age}  </li>
                            <button type="button" onClick={deleteUser(user.id)}> Delete User </button>
                        </ul>
                    )
                })}
            </div>
            <div>
                <AdultUsers />
            </div>
        </div>
    )
}
export default AllUsers;