import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Container, Grid } from '@mui/material';
import Calendario from './Calendario';
import { Select } from 'antd';
import SelectorHorarios from './selectorHorarios';

const style = {
    background: '#0092ff',
    padding: '8px 0',
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
    const [legajo, setLegajo] = useState("")
    
    const info = [{value:'45147',label:'Juan Pablo Martinez'},{value:'78415', label:'Agustina Daniela Hernandez'}]

    const onChange = (value) => {
        setLegajo(value)
    };

    console.log(legajo);

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
                {legajo != "" &&
                <Grid container columns={{ xs: 4, sm: 8, md: 12, lg: 24 }} sx={{marginTop: 10, marginBottom: 25.8, justifyContent:"center", alignItems: "center", gap: 10}}>
                    <Grid item xs={4} sm={6} md={8} sx={{justifyContent:"center"}}>
                        <Calendario/>
                    </Grid>
                    <Grid item xs={4} sm={6} md={8} sx={{justifyContent:"center"}}>
                        <SelectorHorarios/>
                    </Grid>
                </Grid>
                }
        </Container>
    )
}

export default BusquedaEspecialista