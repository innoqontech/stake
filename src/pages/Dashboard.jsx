import React from 'react'
import './Dashboard.css'
import styled from 'styled-components';
import Dashleft from '../components/Dashleft'
import Dashmiddle from '../components/Dashmiddle';
import DashRight from '../components/DashRight';

const Dashboard = () => {


    const DIV1 = styled.div`
        display: flex;
        justify-content: flex-start;
    `

  return (
    <DIV1>
      <Dashleft />
      <Dashmiddle />
      <DashRight />
      
    </DIV1>
  )
}

export default Dashboard
