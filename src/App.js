
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import Home from './components/Home';
import Navbar from './components/NavBar1';
import Projectek from './components/Projectek';
import Skill from './Page/Skill';
import React from 'react'
import { useState, useEffect } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import './styles/App.css'


const App = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (

        loading ?
            <ScaleLoader className='loader' color={"#F37A24"} loading={loading}
                size={30}
            />
            :
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

