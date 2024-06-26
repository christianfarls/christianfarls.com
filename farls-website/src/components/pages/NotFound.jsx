import React from 'react';
import {Box, Typography} from "@mui/material";

const NotFound = () => {
    return (
        <Box
            flex={3}
            p={2}
            sx={{ height: '800px' }}
        >
            <Typography variant="h4" component="h4">
                This page you were searching for does not exist
            </Typography>
        </Box>
    );
}

export default NotFound;
