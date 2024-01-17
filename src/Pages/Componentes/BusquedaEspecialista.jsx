import React from 'react';
import '../../App.css';
import { Autocomplete, Box, TextField } from '@mui/material';



function BusquedaEspecialista() {

    const especialistas = [
        {label: 'Emiliano Corsaro'},
        {label: 'Agustina Hernandez'},
    ];

    return(
        <Box>
            <Autocomplete
            disablePortal
            id="idEspecialista"
            options={especialistas}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Especialista" />}
            />
        </Box>
    )
}

export default BusquedaEspecialista
