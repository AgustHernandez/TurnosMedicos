import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Container, Grid } from '@mui/material';
import Calendario from './Calendario';
import { Button, Select } from 'antd';
import SelectorHorarios from './selectorHorarios';
import { CheckOutlined } from '@ant-design/icons';
import { useGlobalContext } from './utils/global.context';

const style = {
    background: '#0092ff',
    padding: '8px 0',
};

const onSearch = (value) => {
    console.log('search:', value);
};

const filterOption = (input, option) =>
    (option.nombre + option.apellido).toLowerCase().includes(input.toLowerCase());

function BusquedaEspecialista() {

    const url = "http://localhost:8080/api/especialistas";
    const [data, setData] = useState([]);
    const [legajo, setLegajo] = useState("74157");
    const [fechaSeleccionada, setFechaSeleccionada] = useState("2024-01-29T21:43:45.0Z");

    const handleFechaChange = nuevaFecha => {
      setFechaSeleccionada(nuevaFecha);
    }

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
  }, [legajo]);


  return (
    <Container maxWidth="lg" sx={{ marginTop: 0 }}>
      <Container>
        <Select
          showSearch
          placeholder="Seleccione un especialista"
          optionFilterProp="children"
          onChange={onChange}
          style={{ width: 300, height: 50 }}
          filterOption={filterOption}
          options={data}
        />
      </Container>
      { legajo != "" &&
        <Grid container columns={{ xs: 4, sm: 4, md: 4, lg: 10 }} sx={{marginTop: 10, marginBottom: 10, justifyContent:"center", gap: 5}}>
          <Grid container item xs={4} justifyContent="center">
            <Calendario onFechaChange={handleFechaChange}/>
          </Grid>
          <Grid item xs={4} justifyContent="center" alignItems="center">
          <SelectorHorarios fechaSeleccionada={fechaSeleccionada} legajo={legajo} />
          </Grid>
          <Grid container item xs={8} justifyContent="flex-end" alignItems="center">
            <Button shape="round" icon={<CheckOutlined />} value="large">
              Confirmar
            </Button> 
          </Grid>
        </Grid>
      }
    </Container>
  )
}

export default BusquedaEspecialista