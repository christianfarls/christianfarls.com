import React, { useState } from "react";
import linkedin_icon from "./linkedin-logo.png";
import github_icon from "./github.png";
import contact_icon from "./paper-plane.png";
import { Box, Modal, Typography } from "@mui/material";

const buttonStyles = {
    background: 'none',
    border: 'none',
    padding: 0,
    margin: 0,
    cursor: 'pointer',
    outline: 'none',
};

const LinkedIn = () => {
    return (
        <a
            href="https://www.linkedin.com/in/christianfarls/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
        >
            <button style={buttonStyles}>
                <img src={linkedin_icon} alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
            </button>
        </a>
    );
};

const Github = () => {
    return (
        <a
            href="https://www.github.com/christianfarls"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
        >
            <button style={buttonStyles}>
                <img src={github_icon} alt="GitHub" style={{ width: '30px', height: '30px' }} />
            </button>
        </a>
    );
};

const Contact = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <button style={buttonStyles} onClick={handleOpen}>
                <img src={contact_icon} alt="Contact" style={{ width: '30px', height: '30px' }} />
            </button>
            <InfoModal open={open} handleClose={handleClose} />
        </>
    );
};

const InfoModal = ({ open, handleClose }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Contact Info
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <span style={{ display: 'block', marginBottom: '0.5rem' }}>
                        <strong>Phone:</strong> +1 (412) 713-5531
                    </span>
                    <span style={{ display: 'block', marginBottom: '0.5rem' }}>
                        <strong>Email:</strong> cfarls@nd.edu
                    </span>
                    <span style={{ display: 'block' }}>
                        <strong>Address:</strong> 567 Macleod Drive Gibsonia, PA 15044 USA
                    </span>
                </Typography>
            </Box>
        </Modal>
    );
};

export { LinkedIn, Github, Contact };
