import React from 'react';
import { Box, Typography } from "@mui/material";
import './About.css';

const About = () => {
    return (
        <div className="about">
            <Box className="about-box">
                <Typography variant="h1" component="h1">
                    Welcome!
                </Typography>
                <Typography variant="p" component="p">
                    I'm currently a junior studying Computer Science at the University of Notre Dame.<br/>
                    As this website is currently under construction, feel free to visit my socials or check out my CV.<br/>
                    If you have any questions, please email me at cfarls@nd.edu or call +1 (412) 713-5531.
                </Typography>
            </Box>
        </div>
    );
}

export default About;
