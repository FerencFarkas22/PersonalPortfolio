
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projectek from './components/Projectek';
import Skill from './Page/Skill';
import React from 'react'
import { useState, useEffect } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import './styles/App.css'
import { render } from '@testing-library/react';


const App = () => {

    return (

        
            <React.StrictMode>
                <Navbar />
                <Home />
                <Skill />
                <Projectek />
                <Hobbies />
                <Footer />
            </React.StrictMode>


    )

}

export default App

