import React from 'react';
import JoinCard from '../JoinCard';
import deliveryImg from "../../images/delivery.jpg";
import restaurantImg from '../../images/restaurant.jpg';
import teamImg from '../../images/team.jpg';
import {
    JoinContainer,
    JoinCardList
} from './JoinSectionElements'
const cardInfos = [
    {
        id: 0,
        link:"/deliver",
        info: "Deliver with AFoodo",
        url: deliveryImg,
        direction: "-100%"
    },
    {
        id: 1,
        link: "/restaurant",
        info: "Connect your restaurant with millions of people",
        url: restaurantImg,
        direction: "100%"
    },
    {
        id: 1,
        link: "/joinus",
        info: "Become a part of our team",
        url: teamImg,
        direction: "100%"
    }
]
const JoinSection = () => {

    const cardInfoComp = cardInfos.map((cardInfo)=>{
        return (<JoinCard 
            key={cardInfo.id} 
            link={cardInfo.link}
            url = {cardInfo.url}
            info = {cardInfo.info}
            direction = {cardInfo.direction}
            />)
    })
  return (
    <JoinContainer>
        
        <JoinCardList>
            {cardInfoComp}
        </JoinCardList>
    </JoinContainer>
  )
}
export default JoinSection
