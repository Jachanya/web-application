import React from 'react'
import {
    DeliverContainer
} from './DeliverElements';
import Navbar from '../../components/Navbar';
const DeliverLandPage = () => {
  return (
    <DeliverContainer
        initial={{
            x: 100,
            opacity: 0
            }}
        animate={{
            x: 0,
            opacity: 1
        }}
        exit={{
            x: 100,
            opacity: 0
        }}
        transition= {{
            duration: 1
        }}>
        <Navbar/>
        Deliver
    </DeliverContainer>
  )
}

export default DeliverLandPage
