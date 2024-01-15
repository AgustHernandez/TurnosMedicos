import React from 'react';
import HeroSection from '../assets/portada.jpg'
import Image from 'react';
import '../App.css'



function Portada() {

    return(
        <div id='containerHeroSection'>
            <img src={HeroSection} alt='' id='HeroSection'/>
        </div>
    )
}

export default Portada

