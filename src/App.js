import React from 'react'
import './index.css'
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from './Components/Home';
import Projects from "./Components/Projects";
import Navbar from './Components/Navbar';
import Skills from "./Components/Skills";
import { Route, Routes } from 'react-router';


const App = () => {
    return (
        <>
            <Navbar />
            <About/>
            <Home/>
            <Projects/>
            <Skills/>
            <Contact/>
        </>
    )
}

export default App
