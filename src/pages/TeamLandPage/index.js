import React from 'react'
import {
    TeamContainer
} from './TeamElements';
import Navbar from '../../components/Navbar';

const TeamLandPage = () => {
  return (
    <TeamContainer
        initial={{
            x: 100,
            opacity: 0
            }}
        animate={{
            x: 0,
            opacity: 1
        }}
        exit={{
            x: 100,
            opacity: 0
        }}
        
        transition= {{
            duration: 1
        }}>
        <Navbar />
      Become a team member
    </TeamContainer>
  )
}

export default TeamLandPage
