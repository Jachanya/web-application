import React from 'react';
import { useNavigate } from "react-router-dom";
import {
    CardContainer,
    CardImg,
    CardImgContainer,
    CardInfo,
    CardLink,
    CardLinkContainer
} from './JoinCardElements';

const JoinCard = (props) => {
    const navigate = useNavigate();
    function handleClick(){
        navigate(props.link);
    } 
    return (
        <CardContainer
            animate={{
                scale: 1
            }}
            transition = {{
                type: "spring",
                stiffness: 100,
            }}
            whileHover={{
                scale: 1.1,
                borderRadius: "20px"
            }}

            onClick = {handleClick}
        >
            <CardImgContainer>
                <CardImg src={props.url} alt=""/>
            </CardImgContainer>
            <CardInfo>
                {props.info}
            </CardInfo>
            <CardLinkContainer>
                <CardLink to = {props.link}>
                    Apply Now
                </CardLink>
            </CardLinkContainer>
        </CardContainer>
    )
}

export default JoinCard
