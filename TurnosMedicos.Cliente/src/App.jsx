import React from 'react';
import './App.css'
import NavBar from './Pages/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import LandingPage from './Pages/LandingPage';
import Turnos from './Pages/Turnos';
import LogIn from './Pages/LogIn';
import { Layout } from 'antd';
import { Content, Header, Footer } from 'antd/es/layout/layout';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <NavBar/>
        </Header>
        <Content style={{ padding: '0 48px' }}>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/reservar' element={<Turnos/>}/>
            <Route path='/inicioSesion' element={<LogIn/>}/>
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center'}}>
          ©{new Date().getFullYear()} Created by Agustina Hernandez
        </Footer>
      </Layout>
    </BrowserRouter>
    
    </>
  )
}

export default App
