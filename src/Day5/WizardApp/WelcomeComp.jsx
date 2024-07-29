import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';


export const WelcomeComp = () => {
  return (
    <div>
      <Link to='/gettingStarted'>
        <button> Start </button>
      </Link>
    </div>
  )
}


export default WelcomeComp;