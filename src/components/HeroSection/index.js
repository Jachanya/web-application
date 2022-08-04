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
    HeroBgImg,
    HeroH1
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
            {props.titleAnimate ? <TitleGen /> : <HeroH1>{props.header}</HeroH1>}
            <HeroAddress>
                <HeroInputContainer>
                    <HeroFaMapMarkerAlt
                        size="1em"
                        color="#9433FF"
                    ></HeroFaMapMarkerAlt>
                    <HeroInput 
                    placeholder={props.placeHolder}>

                    </HeroInput>
                </HeroInputContainer>
                <HeroBtn to={props.buttonTo}>{props.button}</HeroBtn>
            </HeroAddress>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
