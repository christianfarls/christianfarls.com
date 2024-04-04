import React from 'react';
import {AppBar, Box, Switch, styled, Toolbar, Typography} from "@mui/material";
import {LinkedIn, Github, Contact} from "../icons/Icons"

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

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
                <Switch />
                <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>christianfarls.com</Typography>
                <Typography variant="h5" align="center" sx={{display:{xs:"block", sm:"none"}}}>cf</Typography>
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