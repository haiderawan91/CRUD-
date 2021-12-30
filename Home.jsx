import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import "../Styles/index.css";
import pic from "../Images/computers.svg";

const Home = () => {
    return (
        <>
        <Common name='Get the best with' 
        imgsrc={pic} visit="/services" 
        content='Providing quality services at affordable costs, where you are the priority.'
        btname="Get Started"/>
        </>
    );
};

export default Home;

