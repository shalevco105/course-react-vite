import React from 'react'


export const SummeryComp = () => {
    const fname = localStorage.getItem('firstName');
    const lname = localStorage.getItem('lastName');
    const city = localStorage.getItem('city');
    return (
        <div>
            <p>{fname}</p>
            <p>{lname}</p>
            <p>{city}</p>
        </div>
    )
}
export default SummeryComp;