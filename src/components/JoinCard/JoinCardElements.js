import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

export const CardContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    padding: 0.3rem;
    height: 500px;
    
    max-width: 400px;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 20px;
    
    @media screen and (max-width: 900px){
        width: 70%;
    }

    @media screen and (max-width: 700px){
        width: 80%;
    }
`

export const CardImgContainer = styled.div`
    height: 85%;
    width: 100%;
    @media screen and (max-width: 1500px){
        height: 85%;
    }
    @media screen and (max-width: 1200px){
        height: 85%;
    }

    
    @media screen and (max-width: 900px){
        height: 450px;
    }

    @media screen and (max-width: 700px){
        height: 400px;
    }
`


export const CardImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
`

export const CardInfo = styled.h5`
    font-family: 'Encode Sans Expanded', sans-serif;
    font-size: 1.1rem;
    text-align: center;
    padding-left: 1rem;
    padding-top: 1rem;
    margin-bottom: 5px;
`
export const CardLinkContainer = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    text-align: center;
    margin: auto 0;
    color:#9433FF;
    width: 80%;
    border-radius: 10px;
    margin-bottom: 2px;
`

export const CardLink = styled(Link)`
    padding-top: 0.5rem;
    color: #9433FF;
    font-family: 'Encode Sans Expanded', sans-serif;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
`