import React from 'react';
import './App.css'
import Banner from './components/Banner.js';
import Header from './components/Header.js';
import Etusivu from './pages/Etusivu.js';
import Cards from './pages/Cards.js';
import Ostoskori from './pages/Ostoskori.js';
import Tekijat from './pages/Tekijat.js';
import Subtitle from './components/Subtitle.js';
import Yllapito from './pages/Yllapito.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import { Routes, Route } from 'react-router-dom';



function App() {

return (
    <>
     <Banner />
     <Header />
     <Subtitle />
        <div className="container">
            <Routes>
                <Route path="/" element={<Etusivu />} />
                <Route path="/Joulukortit" element={<Cards param='Joulukortit'/>} />
                <Route path="/Joululahjapaperit" element={<Cards param='Joululahjapaperit'/>} />
                <Route path="/Koristenauhat" element={<Cards param='Koristenauhat'/>} />
                <Route path="/Ostoskori" element={<Ostoskori/>} />
                <Route path="/Tekijat" element={<Tekijat/>} />
                <Route path="/Yllapito" element={<Yllapito />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </div>
     
    </>
)
}

export default App;