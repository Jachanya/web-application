import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import JoinSection from '../../components/JoinSection';
import FooterSection from '../../components/FooterSection';


const LandingPage = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  
  return (
    <div>
      <Navbar 
        isSidebarActive = {isSidebarActive}
        setIsSidebarActive = {setIsSidebarActive}
      />
      <Sidebar 
          isSidebarActive = {isSidebarActive}
          setIsSidebarActive = {setIsSidebarActive}/>
      <HeroSection />
      <JoinSection />
      <FooterSection />
    </div>
  )
}

export default LandingPage
