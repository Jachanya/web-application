import React from 'react'
import {
    CardContainer,
    CardImg,
    CardImgContainer,
    CardInfo,
    CardLink,
    CardLinkContainer
} from './JoinCardElements';

const JoinCard = (props) => {
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
