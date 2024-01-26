import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Container, Grid } from '@mui/material';
import Calendario from './Calendario';
import { Button, Select } from 'antd';
import SelectorHorarios from './SelectorHorarios';
import { CheckOutlined } from '@ant-design/icons';
import { useGlobalContext } from './utils/global.context';
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const url = "http://localhost:8080/api/especialistas";
    const [data, setData] = useState([]);
    const {legajo, fechaSeleccionada, setLegajo,getRequestOptions} = useGlobalContext()

    const handleFechaChange = nuevaFecha => {
      setFechaSeleccionada(nuevaFecha);
    }

    const onChange = (value) => {
      setLegajo(value)
    };


    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

        const fetchInfo = () => {
          fetch(url, getRequestOptions('GET'))
            .then((res) => {
              if (res.ok) {
                return res.json();
              } else {
                if (res.status === 401 || res.status === 403) {
                  navigate("/login");
                } else {
                  throw new Error('Error en la solicitud: ' + res.statusText);
                }
              }
            })
            .then((data) => {
              // Aquí procesa los datos después de verificar el estado
              setData(data.map(function (elemento) {
                return {
                  value: elemento.legajo,
                  label: elemento.apellido + ', ' + elemento.nombre
                };
              }));
            })
            .catch((error) => {
              console.error('Error en la solicitud:', error);
            });
        };
        
        

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