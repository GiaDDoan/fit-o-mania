import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/hero-banner-image.jpg';

const HeroBanner = () => {
  return (
    <Box
        sx={{
            mt: { lg:'212px', xs: '70px'},
            ml: { sm: '50px' }
        }}
        position='relative'
        p='26px'
    >
        <Typography color='#89513E' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>

        <Typography
            fontWeight={700}
            sx={{
                fontSize: {lg: '44px', xs: '40px'}
            }}
            mb='23px'
            mt='30px'
        >
            Sweat, Smile <br /> and Repeat
        </Typography>

        <Typography
            fontSize='22px'
            lineHeight='35px'
            mb={4}
        >
            Check out the most effective exercises
        </Typography>

        <Button
            href='#exercises'
            variant='contained'
            color='error'
            sx={{
                backgroundColor: '#89513E',
                padding: '10px'
            }}
        >
            Explore Exercises
        </Button>

        <Typography
            fontWeight={600}
            color='#89513E'
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none' }
            }}
            fontSize='200px'
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} className='hero-banner-img' style={{ borderRadius: '0px 0px 30px 30px'}} />
    </Box>
  )
}

export default HeroBanner