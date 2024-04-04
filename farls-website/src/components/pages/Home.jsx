import React from 'react';
import {Box, Typography} from '@mui/material'

const Home = () => {
    return (
        <Box
            flex={1}
            p={2}
            sx={{ display: { xs: "none", sm: "block" }, width: "10px" }}
        >
            <Typography variant="h3" component="h2">
                h3. Heading
            </Typography>
        </Box>
    );
}

export default Home;
