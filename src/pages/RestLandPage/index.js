import React from 'react';
import {
    RestaurantContainer
} from './RestaurantElements';

import HeroSection from '../../components/HeroSection';
import AboutUs from '../../components/AboutUs'
import Navbar from '../../components/Navbar';
import Video from '../../videos/restaurantVideo.mp4';
import bgImg from '../../images/restaurantImg.jpg';

const RestLandPage = () => {
  return (
    <RestaurantContainer
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
            header = "Connect your restaurant with millions of people"
            videoSrc = {Video}
            imgSrc = {bgImg}
            button = "Apply Now"
            placeHolder = "Enter restaurant location"
        />
        <AboutUs />
    </RestaurantContainer>
  )
}

export default RestLandPage
