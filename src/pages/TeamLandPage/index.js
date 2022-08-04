import React from 'react'
import {
    TeamContainer
} from './TeamElements';
import HeroSection from '../../components/HeroSection';

import Navbar from '../../components/Navbar';
import Video from '../../videos/supportVideo.mp4';
import bgImg from '../../images/customerSupport.jpg';
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
        <HeroSection 
        header = "Become a part of our team"
        videoSrc = {Video}
        imgSrc = {bgImg}
        button = "Apply Now"
        buttonTo = "register/team"
        placeHolder = "Enter your location"
        />
    </TeamContainer>
  )
}

export default TeamLandPage
