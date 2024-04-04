import React from "react";
import linkedin_icon from "./linkedin-logo.png";
import github_icon from "./github.png";
import contact_icon from "./paper-plane.png";

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
                <img src={linkedin_icon} alt="LinkedIn" style={{ width: '30px', height: '30px' }}/>
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
                <img src={github_icon} alt="GitHub" style={{ width: '30px', height: '30px' }}/>
            </button>
        </a>
    );
};

const Contact = () => {
    return (
        <button style={buttonStyles}>
            <img src={contact_icon} alt="Contact" style={{ width: '30px', height: '30px' }}/>
        </button>
    );
};

export { LinkedIn, Github, Contact };
