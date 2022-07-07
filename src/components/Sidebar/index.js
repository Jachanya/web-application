import React from 'react'
import {
    SidebarContainer,
    SidebarMdOutlineCancel,
    ListItem,
    ListMenu
} from './SidebarElements';

const listVariants = {
    open: { opacity: 1, x: 0},
    closed: { opacity: 0, x: "-10vh"},
  }

const Sidebar = (props) => {
  return (
    <SidebarContainer
        animate={props.animate}
        variants={props.variants}
        transition={props.transition}
        initial={props.initial}
        >
        <SidebarMdOutlineCancel 
            color="#9433FF" 
            size={45} 
            onClick={()=>props.setIsSidebarActive(false)}/>

        <ListMenu>
            <ListItem 
                variants={listVariants}
                whileHover={{
                    scale: 1.1,
                    color: "#9433FF"
                }}
                >Sign In</ListItem>
            <ListItem
                variants={listVariants}
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
