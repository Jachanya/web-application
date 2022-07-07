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
import Video from '../../videos/heroVideo.mp4';
import bgImg from '../../images/bg-img.jpg';

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg playsInLine defaultMuted autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroBgMobile>
            <HeroBgImg src={bgImg} alt="">

            </HeroBgImg>
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
