import React from 'react';
import {
    RestaurantContainer
} from './RestaurantElements';
import Navbar from '../../components/Navbar';

const RestLandPage = () => {
  return (
    <RestaurantContainer
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
        <Navbar />
      Hey
    </RestaurantContainer>
  )
}

export default RestLandPage
