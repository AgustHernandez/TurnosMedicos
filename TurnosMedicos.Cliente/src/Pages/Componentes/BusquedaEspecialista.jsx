import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Autocomplete, Container, TextField } from '@mui/material';
import Calendario from './Calendario';
import { Select } from 'antd';


const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option.nombre + option.apellido).toLowerCase().includes(input.toLowerCase());

function BusquedaEspecialista() {

    const url = "http://localhost:8080/api/especialistas";
    const [data, setData] = useState([]);
    
    const info = [{value:'45147',label:'Juan Pablo Martinez'},{value:'78415', label:'Agustina Daniela Hernandez'}]

    const onChange = (value) => {
        console.log(`Selected: ${value}`);
    };

    const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  
    const fetchInfo = () => {
        fetch(url)
        .then((res) => res.json())
        .then((s) => setData(info))
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    console.log("Data "+ JSON.stringify(data))
    
    return(
        <Container maxWidth="lg" sx={{marginTop: 0}}>
            <Container>
                <Select
                showSearch
                placeholder="placeholder"
                optionFilterProp="children"
                style={{ width: 300, height:50 }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={data}
            />
            </Container>
            <Container>
                <Calendario/>
            </Container>
        </Container>
    )
}

export default BusquedaEspecialista


/*Autocomplete
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="idEspecialista"
                options={data}
                sx={{ width: 300, borderRadius: 50 }}
                getOptionLabel={(option) => option.apellido + ", "+ option.nombre}
                renderInput={(params) => <TextField {...params} label="Especialista" />}
                />*/