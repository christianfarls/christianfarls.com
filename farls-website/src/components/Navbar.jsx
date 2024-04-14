import React from 'react';
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { LinkedIn, Github, Contact } from "../icons/Icons"
import Navigation from './Navigation.jsx';
import './Navbar.css';

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar className="toolbar">
                <Typography variant="h5" align="center">cf</Typography>
                <Navigation />
                <Box className="icons-container">
                    <LinkedIn />
                    <Github />
                    <Contact />
                </Box>
                <Box className="contact-box">
                    <Contact />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
