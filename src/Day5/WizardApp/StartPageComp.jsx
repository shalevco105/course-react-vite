import React, { useState } from 'react'
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';

export const StartPageComp = () => {
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    const navigate = useNavigate();
 

    const navigateToCityComp = (e) => {
        e.preventDefault();
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        navigate(`/choosingCity`);
    }

    return (
        <div>
            StartPageComp
            <form>
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" onChange={(e) => setFirstName(e.target.value)} required /><br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" onChange={(e) => setLastName(e.target.value)} /><br />
                <input type="submit" value="Submit" onClick={navigateToCityComp} />
            </form>
        </div>
    )
}


export default StartPageComp;

