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
    HeroFaMapMarkerAlt,
    HeroBgMobile,
    HeroBgImg
} from './HeroElements';
import TitleGen from '../TitleGen';

const HeroSection = (props) => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg playsInLine autoPlay loop muted src={props.videoSrc} type='video/mp4'/>
        </HeroBg>
        <HeroBgMobile>
            <HeroBgImg src={props.imgSrc} alt=""/>
        </HeroBgMobile>
        <HeroContent>
            <TitleGen />
            <HeroAddress>
                <HeroInputContainer>
                    <HeroFaMapMarkerAlt
                        size={20}
                        color="#9433FF"
                    ></HeroFaMapMarkerAlt>
                    <HeroInput 
                    placeholder={props.placeHolder}>

                    </HeroInput>
                </HeroInputContainer>
                <HeroBtn>Search</HeroBtn>
            </HeroAddress>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
