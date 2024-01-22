import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Container } from '@mui/material';
import Calendario from './Calendario';
import { Select } from 'antd';

function BusquedaEspecialista() {
  const url = "http://localhost:8080/api/especialistas";
  const [data, setData] = useState([]);

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const fetchInfo = () => {
        fetch(url)
          .then((res) => res.json())
          .then((s) => {
            setData(s.map(function (elemento) {
              return {
                value: elemento.legajo,
                label: elemento.apellido + ', ' + elemento.nombre
              };
            }))
          })
      }

  useEffect(() => {
      fetchInfo();
  }, [data]);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 0 }}>
      <Container>
        <Select
          showSearch
          placeholder="Seleccione un especialista"
          optionFilterProp="children"
          style={{ width: 300, height: 50 }}
          filterOption={filterOption}
          options={data}
        />
      </Container>
      <Container>
        <Calendario />
      </Container>
    </Container>
  )
}

export default BusquedaEspecialista;

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