import React from 'react'
import {
    SidebarContainer,
    SidebarMdOutlineCancel
} from './SidebarElements';

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

const Sidebar = (props) => {
  return (
    <SidebarContainer
        animate={props.isSidebarActive ? "open" : "closed"}
        variants={variants}
        transition={{
            delay:0.3
        }}
        >
      <SidebarMdOutlineCancel 
        color="#9433FF" 
        size={45} 
        onClick={()=>props.setIsSidebarActive(false)}/>
    </SidebarContainer>
  )
}

export default Sidebar
