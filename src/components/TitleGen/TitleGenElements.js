import styled from 'styled-components'
import {motion} from "framer-motion";

export const HeroH1 = styled(motion.h1)`
    color: #fff;
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