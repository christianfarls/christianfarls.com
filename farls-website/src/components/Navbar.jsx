import React from 'react';
import {AppBar, Box, styled, Toolbar, Typography} from "@mui/material";
import {LinkedIn, Github, Contact} from "../icons/Icons"
import Navigation from './Navigation.jsx';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
});

const Icons = styled(Box)(({ theme }) => ({ 
    display: "none", 
    alignItems: "right", 
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const ContactBox = styled(Box)(({ theme }) => ({ 
    display: "flex", 
    alignItems: "right",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}));

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h5" align="center" sx={{xs:"block"}}>cf</Typography>
                <Navigation />
                <Icons>
                    <LinkedIn/>
                    <Github/>
                    <Contact/>
                </Icons>
                <ContactBox>
                    <Contact/>
                </ContactBox>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar