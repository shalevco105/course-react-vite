import React from 'react'
import { useSelector } from 'react-redux';

export const AdultUsers = () => {
  const adultUsers = useSelector(state => state.users).filter(user => user.age >= 18);

  return (
    <div style={{ border: "1px solid purple" }}>
      {adultUsers.map(user => {
        return (
          <ul key={user.id}>
            <li> {user.fname}   </li>
            <li> {user.lname}   </li>
            <li> {user.age}  </li>
          </ul>
        )
      })}
    </div>
  )
}
export default AdultUsers;