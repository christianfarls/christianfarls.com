import React from 'react';
import { Box, Typography } from "@mui/material";
import './Page.css';

const About = () => {
    return (
        <div className="about">
            <Box className="page-box">
                <Typography variant="h1" component="h1">
                    About
                </Typography>
                <Typography variant="h4" component="p">
                    I know there isn't much to learn about me right now...currently debugging the site.
                    <br/>
                    While I solve my styling issues, please feel free to check out my CV or my socials in the links above.
                </Typography>
            </Box>
        </div>
    );
}

export default About;
