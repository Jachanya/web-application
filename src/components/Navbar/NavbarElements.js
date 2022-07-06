import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {RiArrowDropDownLine} from 'react-icons/ri';

export const Nav = styled.nav`
    display: flex;
    background: black;
    justify-content: center;
    align-items: center;
    min-width: 200px;
    height: 70px;
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    height: 70px;
    @media screen and (max-width: 768px) {
        justify-content: space-between;
      }
`

export const NavLogo = styled(Link)`
    color: white;
    font-size: 2rem;
    margin-left: 1rem;
    font-family: 'Splash', cursive;
    text-decoration: none; 
`

export const NavMenu = styled.div`
    display: flex;
    gap: 10px;

    @media screen and (max-width: 768px) {
        display: none;
      }
`
export const NavMobile = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        justify-self: flex-end;
        cursor: pointer;
        color: white;
    }
`

export const NavRiArrowDropDownLine = styled(RiArrowDropDownLine)`
    transition: all 0.1s ease-in-out;
    transform: rotate(${({drop})=>drop ? 180 : 0}deg)
    
`

export const NavBtn = styled.button`
    border-radius: 3px;
    background: #9433FF;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background:  #9D62DD;
        color: white;
    }
`