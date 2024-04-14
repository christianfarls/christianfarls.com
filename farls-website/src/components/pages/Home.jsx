import React from 'react';
import ParallaxWrapper from './ParallaxWrapper.jsx';
import photo from "../../static/images/home-photo.jpg";

const Home = () => {
    return (
        <ParallaxWrapper title="Christian Farls" photo={photo} />
    );
}

export default Home;
