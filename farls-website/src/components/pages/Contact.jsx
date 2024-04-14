import React from 'react';
import {Box, Typography} from "@mui/material";
import './Page.css'

const Contact = () => {
    return (
        <div className="contact">
            <Box className="page-box">
                <Typography variant="h1" component="h1">
                    Contact
                </Typography>
                <Typography variant="h4" component="p">
                    You can find my contact information on the right of the navigation bar.<br/>
                    Please reach out with any questions!
                </Typography>
            </Box>
        </div>
    );
}

export default Contact;
