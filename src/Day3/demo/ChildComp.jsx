import React from 'react';

export const ChildComp = ({ user }) => {
    return (
        <div style={{border:"2px solid green"}}>
            <ul>
                <li>Name:{user.name}</li>
                <li>User Name:{user.username}</li>
            </ul>
        </div>
    )
}

export default ChildComp;