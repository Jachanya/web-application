import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import JoinSection from '../../components/JoinSection';
import FooterSection from '../../components/FooterSection';

import Video from '../../videos/heroVideo.mp4';
import bgImg from '../../images/bg-img.jpg';

const variants = {
  open: { opacity: 1, x: 0 , transition: {
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1
  }},
  closed: { opacity: 0, x: ["0%","100%"] },
  exit: {opacity: 0, x: -100}
}

const LandingPage = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  
  return (
    <div>
      <Navbar 
        isSidebarActive = {isSidebarActive}
        setIsSidebarActive = {setIsSidebarActive}
      />
      <Sidebar 
          
          animate={isSidebarActive ? "open" : "closed"}
          variants={variants}
          transition={{
              type: "spring",
              delay:0.2
          }}
          exit="exit"
          initial="closed"
          setIsSidebarActive = {setIsSidebarActive}
          />
      <HeroSection 
        titleAnimate = {true}
        videoSrc = {Video}
        imgSrc = {bgImg}
        placeHolder = "Enter delivery address"
        />
      <JoinSection />
      <FooterSection />
    </div>
  )
}

export default LandingPage
