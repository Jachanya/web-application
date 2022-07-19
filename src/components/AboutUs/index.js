import React from 'react';
import {BiRestaurant} from 'react-icons/bi';
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
import {CgListTree} from 'react-icons/cg';
import {SiSimpleanalytics} from 'react-icons/si';

import {
    AboutUsContainer,
    Header,
    AboutUsPara,
    HowItWork,
    HowItWorkH3,
    BulletPoint,
    BulletPointList,
    BulletPointP,
    BulletPointH3
} from './AboutUsElements';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Header>About
        <span style ={{color: "#9433FF"}}> us</span></Header>
      <AboutUsPara>
        AFoodo provide <span style ={{
            color: "#C5B358"}}>
            high quality service</span> and <span style ={{
                color: "#C5B358"}}>
            smooth connection</span> between customers 
            and your business. We make it super easy for new customers to find your restaurant
             and more easier for your current customers to order more.
            We provide no stress or struggles, we provide Easy Life!
      </AboutUsPara>
      <HowItWork>
        <HowItWorkH3>
            How it work
        </HowItWorkH3>
        <BulletPointList>
            
            <BulletPoint>
                <BiRestaurant
                    size ={45}
                    color= "#9433FF"
                />
                <BulletPointH3>Register your restaurant</BulletPointH3>
                <BulletPointP>Once you have applied to be a business partner, 
                    we would evaluate your submission and promptly respond.</BulletPointP>
            </BulletPoint>
            <BulletPoint>
                <AiOutlineAppstoreAdd
                    size ={45}
                    color= "#9433FF"
                />
                <BulletPointH3>Add available food</BulletPointH3>
                <BulletPointP>Once you have applied to be a business partner, 
                    we would evaluate your submission and promptly respond.</BulletPointP>
            </BulletPoint>
            <BulletPoint>
                <CgListTree
                    size ={45}
                    color= "#9433FF"
                />
                <BulletPointH3>List them for sale</BulletPointH3>
                <BulletPointP>Once you have applied to be a business partner, 
                    we would evaluate your submission and promptly respond.</BulletPointP>
            </BulletPoint>
            <BulletPoint>
                <SiSimpleanalytics
                    size ={45}
                    color= "#9433FF"
                />
                <BulletPointH3>check out business analytics</BulletPointH3>
                <BulletPointP>Once you have applied to be a business partner, 
                    we would evaluate your submission and promptly respond.</BulletPointP>
            </BulletPoint>
        </BulletPointList>
      </HowItWork>
    </AboutUsContainer>
  )
}

export default AboutUs

