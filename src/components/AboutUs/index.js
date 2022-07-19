import React from 'react';
import {
    AboutUsContainer,
    Header,
    AboutUsPara
} from './AboutUsElements';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Header>
        <span style ={{color: "#9433FF"}}>
            About</span> Us</Header>
      <AboutUsPara>
        AFoodo provide <span style ={{color: "#C5B358"}}>
            high quality</span> service and <span style ={{color: "#C5B358"}}>
            smooth connection</span> between customers 
            and your business. We make it super easy for new customers to find your restaurant
             and more easier for your current customers to order more.
            We provide No Stress or Struggles, Easy Life!
      </AboutUsPara>
    </AboutUsContainer>
  )
}

export default AboutUs
