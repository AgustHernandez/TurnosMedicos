import React, { useState, useEffect } from 'react';
import { Space, Table } from 'antd';

const columns = [
  {
    title: 'Horario',
    dataIndex: 'horario',
    key: 'horario',
    render: (text) => <a>{text}</a>,
    responsive: ['lg'],
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <Space size="middle">
          <a onClick={() => guardarTurno(record.codigoTurno)}>Elegir</a>
        </Space>
      ),
    responsive: ['lg'],
  },
];

const guardarTurno = (codTurno) => {
    console.log(codTurno);
  }

function SelectorHorarios({ legajo, fechaSeleccionada }) {
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    console.log(`Obteniendo turnos para ${legajo}`)
    fetch(`http://localhost:8080/api/especialistas/${legajo}/turnos?fecha=${fechaSeleccionada}`)
      .then((res) => res.json())
      .then((s) => setData(s));
  };

  useEffect(() => {
    fetchInfo();
  }, [legajo, fechaSeleccionada]);

  return (
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      bordered
    />
  );
}

export default SelectorHorarios;