import React from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroInput,
    HeroAddress,
    HeroInputContainer,
    Button as HeroBtn,
    HeroFaMapMarkerAlt
} from './HeroElements';
import TitleGen from '../TitleGen';
import Video from '../../videos/heroVideo.mp4';

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg playsInLine autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <TitleGen />
            <HeroAddress>
                <HeroInputContainer>
                    <HeroFaMapMarkerAlt
                        size={20}
                        color="#9433FF"
                    ></HeroFaMapMarkerAlt>
                    <HeroInput 
                    placeholder="Enter delivery address">

                    </HeroInput>
                </HeroInputContainer>
                <HeroBtn>Search</HeroBtn>
            </HeroAddress>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
