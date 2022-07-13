import styled from 'styled-components';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {motion} from 'framer-motion';
export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 95vh;
    position: relative;
    z-index: 1;
    margin-bottom: 100px;
    :before {
        content: "";
        top: 0;
        left: 0;
        right:0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 420px){
        display: none;   
    }
`
export const HeroBgMobile = styled.div`
    display: none;
    @media screen and (max-width: 420px){
        display: block;
        height: 95vh;
        position: absolute;
        
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
`
export const HeroBgImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    
    -o-object-fit: cover;
` 

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    min-height: 200px;
    font-family: 'Encode Sans Expanded', sans-serif;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    position: relative;
    margin-bottom: 3rem;
    top: 0vh;

    @media screen and (max-width: 580px){
        width: 90%;
    }
`


export const HeroAddress = styled.div`
    margin-top: 32px;
    display: flex;
    justify-self: end;
    flex-direction:row;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 480px){
        flex-direction: column;
        gap: 1rem;
        width: 95%;
    }
`
export const HeroH1 = styled(motion.h1)`
    color: #9433FF;
    font-size: 2.5rem;
    max-width: 500px;    
    text-align: center;
    
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroInputContainer = styled.div`
    position: relative;
    width: 350px;
    min-height: 50px;

    @media screen and (max-width: 420px){
        width: 100%;
    }
`

export const HeroInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    outline: none;
    padding: 0 2rem;
    font-size: 1em;
    border-radius: 5px;
    border: none;
    z-index: 2;
`

export const HeroFaMapMarkerAlt = styled(FaMapMarkerAlt)`
    position: absolute;
    left: 0.3rem;
    top: 30%;
    margin: 0 auto;
    height: 40%;
    z-index: 999;
`

export const  Button = styled.button`

    bottom: 0;
    border-radius: 5px;
    white-space: nowrap;
    background: #9433FF;
    color: white;
    cursor: pointer;
    font-size: 20px;
    outline: none;
    border: none;
    min-width: 100px;
    min-height: 50px;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background:  #9D62DD;
        color: white;
    }
`