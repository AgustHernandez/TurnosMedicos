import React, { useState } from 'react';
import '../../App.css';
import { Autocomplete, Box, Container, TextField } from '@mui/material';
import Calendar from 'react-calendar';


function BusquedaEspecialista() {

    const especialistas = [
        'Emiliano Corsaro',
        'Agustina Hernandez',
    ];

    const [value, setValue] = useState(especialistas[0]);
    const [inputValue, setInputValue] = useState('');

    const disabledDates = [tomorrow, in3Days, in5Days];

    function tileDisabled({ date, view }) {
  // Disable tiles in month view only
        if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of disabled dates
        return disabledDates.find(dDate => isSameDay(dDate, date));
        }
    }

    return(
        <Box id="boxBusqueda">
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
                
            </Container>
        </Box>
    )
}

export default BusquedaEspecialista
