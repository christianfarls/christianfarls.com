import React from 'react';
import {Box, Typography} from "@mui/material";

const About = () => {
    return (
        <Box
            flex={3}
            p={2}
            sx={{ height: '800px' }}
        >
            <Typography variant="h1" component="h1">
                About
            </Typography>
            <Typography variant="p" component="p">
                Coming soon...
            </Typography>
        </Box>
    );
}

export default About;
