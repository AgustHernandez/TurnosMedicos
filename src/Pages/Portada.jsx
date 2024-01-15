import React from 'react';
import HeroSection from '../assets/portada.jpg'
import '../App.css'
import { Button } from '@mui/material';



function Portada() {

    return(
        <div id='containerHeroSection'>
            <img src={HeroSection} alt='imagen médico' id='HeroSection'/>
            <div id='containerButtonsPortada'>
                <Button variant='contained'>INSTAGRAM</Button>
                <Button variant='contained'>WHATSAPP</Button>
            </div>
        </div>
    )
}

export default Portada

