import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';
import Back from '../assets/icons/back.png';
import Cardio from '../assets/icons/cardio.png';
import Chest from '../assets/icons/chest.png';
import LowerArms from '../assets/icons/arm.png';
import LowerLegs from '../assets/icons/legs.png';
import Neck from '../assets/icons/neck.png';
import Shoulders from '../assets/icons/shoulder.png';
import UpperArms from '../assets/icons/arm.png';
import UpperLegs from '../assets/icons/legs.png';
import Waist from '../assets/icons/waist.png';

const ICON_OBJECT = {
    back: Back,
    cardio: Cardio,
    chest: Chest,
    lower_arms: LowerArms,
    lower_legs: LowerLegs,
    neck: Neck,
    shoulders: Shoulders,
    upper_arms: UpperArms,
    upper_legs: UpperLegs,
    waist: Waist,
}

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    const itemNoSpace = item.split(' ').join('_')
  return (
    <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
        }}
    >
        <img
            src={ICON_OBJECT[itemNoSpace] ? ICON_OBJECT[itemNoSpace] : Icon}
            alt='dumbbell'
            style={{
                width: '40px',
                height: '40px'
            }}
            
        />
        <Typography
            fontSize='24px'
            fontWeight='bold'
            color='#3a1212'
            textTransform='capitalize'
        >
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart