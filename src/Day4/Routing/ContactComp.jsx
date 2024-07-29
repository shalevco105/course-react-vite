import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export const ContactComp = () => {
    return (
        <div>
            <h4>ContactComp</h4>
            <div>
                <Link to={"phone"}> Show Phones</Link>
                <Link to={"email"}> Show Emails</Link>

            </div>
            <Outlet />
        </div>
    )
}

export default ContactComp;