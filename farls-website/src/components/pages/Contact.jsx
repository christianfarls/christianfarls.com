import React from 'react';
import {Box, Typography} from "@mui/material";

const Contact = () => {
    return (
        <Box
            flex={3}
            p={2}
            sx={{ height: '800px' }}
        >
            <Typography variant="h1" component="h1">
                Info
            </Typography>
            <Typography variant="p" component="p">
                Coming soon...
            </Typography>
        </Box>
    );
}

export default Contact;
