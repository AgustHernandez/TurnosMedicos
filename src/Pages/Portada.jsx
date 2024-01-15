import React from 'react';
import HeroSection from '../assets/portada.jpg'
import '../App.css'
import { Button, Container } from '@mui/material';



function Portada() {

    return(
        <Container maxWidth="xl" id='containerHeroSection'>
            <img src={HeroSection} alt='imagen médico' id='HeroSection'/>
            <div id='containerButtonsPortada'>
                <Button variant='contained'>INSTAGRAM</Button>
                <Button variant='contained'>WHATSAPP</Button>
            </div>
        </Container>
    )
}

export default Portada

