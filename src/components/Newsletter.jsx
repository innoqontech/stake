import React from 'react'
import '../styles/Newsletter.css';
import lg from '../assets/images/home/innoqon1.png'

function Newsletter() {
  return (
    <div className='cont7'>
      <div className="incont7">
        <img src={lg} alt="" />
        <p>Subscribe to our newsletter and get all the latest updates sent to your inbox.</p>
        <button>Sign Me Up</button>
      </div>
    </div>
  )
}

export default Newsletter
