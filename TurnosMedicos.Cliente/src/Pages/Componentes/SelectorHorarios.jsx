import React from 'react';
import { useGlobalContext } from './utils/global.context';
import { Space, Table } from 'antd';

const SelectorHorarios = () => {
  const {data, guardarTurno} = useGlobalContext()

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
            <a onClick={() => guardarTurno(record.codTurno)}>Elegir</a>
          </Space>
        ),
      responsive: ['lg'],
    },
  ];


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