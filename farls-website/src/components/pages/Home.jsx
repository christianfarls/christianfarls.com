import React from 'react';
import {Box, Typography} from '@mui/material'

const Home = () => {
    return (
        <Box
            flex={3}
            p={2}
            sx={{ height: '800px' }}
        >
            <Typography variant="h1" component="h1">
                Welcome!
            </Typography>
            <Typography 
                variant="a" 
                component="a" 
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
                tomkusak.com
            </Typography>
        </Box>
    );
}

export default Home;
