import React from 'react';
import './ParallaxWrapper.css';

const ParallaxWrapper = ({ title, photo }) => {
    return (
        <div className="wrapper">
            <header>
                <img src={photo} className="background" alt="photo"/>
                <h1 className="title">{title}</h1>
            </header>
        </div>
    );
}

export default ParallaxWrapper;
