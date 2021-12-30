import React from 'react'
import pic from "../Images/computers.svg";
import Common from './Common';
const About = () => {
    return (
        <>
        <Common name='About Us' 
        imgsrc={pic} visit="/contact" 
        content='JASON is a Professional Services Platform. We provide you with a number of services to suit your marketing needs for your new business or products. From event management to video editing. Social Media management for your new startup. We have a number of experienced people ready to guide you in your PR. Targeted marketing to capture the desired audience'
        btname="Contact Now"/>
        </>
    );
};

export default About;