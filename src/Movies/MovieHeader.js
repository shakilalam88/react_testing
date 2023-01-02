import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import MobileDetails from './MobileDetails';
import './Movies.css'


const MovieHeader = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='movie/:id' element={<MobileDetails />} />
                <Route path="*" element={Error} />
            </Routes>
        </BrowserRouter>
    )
}

export default MovieHeader