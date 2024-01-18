import React, { useState } from 'react';
import '../../App.css';
import { Autocomplete, Box, Container, TextField } from '@mui/material';
import Calendario from './Calendario';



function BusquedaEspecialista() {

    const especialistas = [
        'Emiliano Corsaro',
        'Agustina Hernandez',
    ];

    const [value, setValue] = useState(especialistas[0]);
    const [inputValue, setInputValue] = useState('');


    return(
        <Container maxWidth="lg" sx={{marginTop: 5}}>
            <Container>
                <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="idEspecialista"
                options={especialistas}
                sx={{ width: 300, borderRadius: 50 }}
                renderInput={(params) => <TextField {...params} label="Especialista" />}
                />
            </Container>
            <Container>
                <Calendario/>
            </Container>
        </Container>
    )
}

export default BusquedaEspecialista
