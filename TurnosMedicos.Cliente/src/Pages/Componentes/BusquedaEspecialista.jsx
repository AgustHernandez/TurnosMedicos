import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Container, Grid } from '@mui/material';
import Calendario from './Calendario';
import { Select, Result, Spin } from 'antd';
import SelectorHorarios from './SelectorHorarios';
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
    const {legajo, fechaSeleccionada, setLegajo, data,setData, guardarTurno,getRequestOptions, enviado,confirmacionTurno, loading} = useGlobalContext()

    const onChange = (value) => {
      setLegajo(value)
    };


    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

        const fetchInfo = () => {
          const url = "http://localhost:8080/api/especialistas";
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
    <>
    {loading == true ?
      <Container>
        <Spin tip="Loading" size="large">
            <div className="content" />
        </Spin>
      </Container>
    :
      <Container>
        {enviado != false ?
            <Result
              status="success"
              title="Turno confirmado!"
              subTitle={`Especialista: ${confirmacionTurno.especialista}     |      Fecha: ${confirmacionTurno.fecha}`}
            />
        :
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
            {legajo != "" &&
              <Grid container columns={{ xs: 4, sm: 4, md: 4, lg: 10 }} sx={{marginTop: 10, marginBottom: 10, justifyContent:"center", gap: 5}}>
                {fechaSeleccionada == "" &&
                  <Grid container item xs={4} justifyContent="center">
                    <Calendario />
                  </Grid>
                }
                {fechaSeleccionada != "" &&
                  <Grid item xs={4} justifyContent="center">
                    <SelectorHorarios guardarTurno={guardarTurno} />
                  </Grid>
                }
              </Grid>
            }
          </Container>
        }
      </Container>
      }
    </>
  )
}

export default BusquedaEspecialista
