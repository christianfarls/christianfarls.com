import React from 'react';
import {Box, List} from "@mui/material";
import Home from '@mui/icons-material/Home'
import Book from '@mui/icons-material/Book'
import CodeIcon from '@mui/icons-material/Code';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import CustomListItem from "./CustomListItem";

const Sidebar = () => {
    return (
        <Box
            flex={1} 
            p={2} 
            sx={{ display: { xs: "none", sm: "block" }, width: "10px" }}
        >
            <List>
                <CustomListItem icon={<Home />} primary="Homepage" to="/" />
                <CustomListItem icon={<EmojiPeopleIcon />} primary="About" to="/about" />
                <CustomListItem icon={<CodeIcon />} primary="Projects" to="/projects" />
                <CustomListItem icon={<ContactPageIcon />} primary="CV" to="/cv" />
                <CustomListItem icon={<Book />} primary="Thesis" to="/thesis" />
                <CustomListItem icon={<InfoIcon />} primary="Info" to="/info" />
            </List>
        </Box>
    )
}

export default Sidebar