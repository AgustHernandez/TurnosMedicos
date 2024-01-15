import React from 'react';
import './App.css'
import NavBar from './Pages/Navbar';
import Footer from './Pages/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import LandingPage from './Pages/LandingPage';
import Turnos from './Pages/Turnos';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Box>
        <NavBar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/reservar' element={<Turnos/>}/>
        </Routes>

        <Footer/>
      </Box>
    </BrowserRouter>
    
    </>
  )
}

export default App
