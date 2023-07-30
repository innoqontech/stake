import React from 'react'
import './Dashleft.css'
import styled from 'styled-components'

import stakelogo from '../assets/images/dashboard/stakelogo.png';

const Dashleft = () => {

    const LEFT = styled.div`
        background-color: #273333;
        height: 100vh;
        width: 18%;
    `
  return (
    <LEFT className='leftsec'>
      <div className="inleftsec">
        <img src={stakelogo} alt="" />
        <div className="links">
              
        </div>
      </div>
    </LEFT>
  )
}

export default Dashleft
