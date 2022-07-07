import React from 'react'
import {
    SidebarContainer,
    SidebarMdOutlineCancel,
    ListItem,
    ListMenu
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
            type: "spring",
            delay:0.2
        }}
        >
        <SidebarMdOutlineCancel 
            color="#9433FF" 
            size={45} 
            onClick={()=>props.setIsSidebarActive(false)}/>

        <ListMenu>
            <ListItem 
                whileHover={{
                    scale: 1.1,
                    color: "#9433FF"
                }}
                >Sign In</ListItem>
            <ListItem
                whileHover={{
                    scale: 1.1,
                    color:"#9433FF" 
                }}
                >Sign Up</ListItem>
        </ListMenu>
    </SidebarContainer>
  )
}

export default Sidebar
