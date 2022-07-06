import React, {useState} from 'react';
import {CgProfile} from 'react-icons/cg';

import {
    Nav,
    NavContainer,
    NavLogo,
    NavMenu,
    NavBtn,
    NavMobile,
    NavRiArrowDropDownLine
} from './NavbarElements';

const Navbar = () => {
  const [isDropped, setIsDropped] = useState(false);
  console.log(isDropped)
  return (
    <Nav>
        <NavContainer>
            <NavLogo to="/">AFoodo</NavLogo>
            <NavMenu>
                <NavBtn to="/login">Log In</NavBtn>
                <NavBtn to="/signup">Sign Up</NavBtn>
            </NavMenu>
            <NavMobile onClick={()=>setIsDropped(!isDropped)}>
                <CgProfile size={35} color="#9433FF" />
                <NavRiArrowDropDownLine size={35} color="#9433FF" drop={isDropped}/>
            </NavMobile>
        </NavContainer>
    </Nav>
  )
}

export default Navbar
