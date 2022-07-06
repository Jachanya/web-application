import styled from 'styled-components'
import {motion} from "framer-motion";

export const HeroH1 = styled(motion.h1)`
    color: #fff;
    font-size: 48px;
    max-width: 500px;
    left: 0;
    bottom: 80px;
    
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`