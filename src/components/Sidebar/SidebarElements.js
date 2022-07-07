import styled from 'styled-components';
import { motion } from "framer-motion"
import {MdOutlineCancel} from 'react-icons/md';

export const SidebarContainer = styled(motion.div)`
    position: absolute;
    padding: 20px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
    background: black;
    display: flex;
    flex-direction: column;
`

export const SidebarMdOutlineCancel = styled(MdOutlineCancel)`
    align-self: start;
    padding-right: 50px;
    cursor: pointer;
`