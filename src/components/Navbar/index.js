import React from 'react';
import {CgProfile} from 'react-icons/cg';

import {
    Nav,
    NavContainer,
    NavLogo,
    NavMenu,
    NavBtn,
    NavMobile
} from './NavbarElements';

const Navbar = (props) => {
  return (
    <Nav>
        <NavContainer>
            <NavLogo to="/">AFoodo</NavLogo>
            <NavMenu>
                <NavBtn to="/login">Log In</NavBtn>
                <NavBtn to="/signup">Sign Up</NavBtn>
            </NavMenu>
            <NavMobile onClick={()=>props.setIsSidebarActive(!props.isSidebarActive)}>
                <CgProfile size={35} color="#9433FF" />
                
            </NavMobile>
        </NavContainer>
    </Nav>
  )
}

export default Navbar
