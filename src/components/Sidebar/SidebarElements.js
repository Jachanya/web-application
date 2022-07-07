import styled from 'styled-components';
import { motion } from "framer-motion"
import {MdOutlineCancel} from 'react-icons/md';

export const SidebarContainer = styled(motion.div)`
    position: fixed;
    padding: 20px;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 1001;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SidebarMdOutlineCancel = styled(MdOutlineCancel)`
    align-self: start;
    padding-right: 50px;
    cursor: pointer;
`

export const ListMenu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    font-size: 2rem;
`

export const ListItem = styled(motion.li)`
    list-style: none;
    color: white;
    margin: 10px;
    font-family: 'Encode Sans Expanded', sans-serif;
    cursor: pointer;
`