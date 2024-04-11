import React from 'react';
import { Box, List, ListItem, ListItemText } from "@mui/material";

const Navigation = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <List sx={{ display: 'flex', flexDirection: 'row', gap: 0 }}>
                <ListItem button component="a" href="/" key="home">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component="a" href="/about" key="about">
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button component="a" href="/projects" key="projects">
                    <ListItemText primary="Projects" />
                </ListItem>
                <ListItem button component="a" href="https://drive.google.com/file/d/1zbGK-uTAZGcEXcbVn68IcqZNyeBzOD7U/view?usp=sharing" target="_blank" rel="noopener noreferrer" key="cv">
                    <ListItemText primary="CV" />
                </ListItem>
                <ListItem button component="a" href="/thesis" key="thesis">
                    <ListItemText primary="Thesis" />
                </ListItem>
                <ListItem button component="a" href="/info" key="info">
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </Box>
    );
}

export default Navigation;
