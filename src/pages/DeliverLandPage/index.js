import React from 'react'
import {
    DeliverContainer
} from './DeliverElements';

import HeroSection from '../../components/HeroSection';

import Navbar from '../../components/Navbar';
import Video from '../../videos/foodDeliveryVideo.mp4';
import bgImg from '../../images/foodDeliveryImg.jpg';

const DeliverLandPage = () => {
  return (
    <DeliverContainer
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
        <Navbar/>
        <HeroSection 
        videoSrc = {Video}
        imgSrc = {bgImg}
        placeHolder = "Enter your location"
        />
    </DeliverContainer>
  )
}

export default DeliverLandPage
