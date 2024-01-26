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
      responsive: ['sm'],
      align: "center",
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex:'key',
      render: (text) => (
          <Space>
            <a onClick={() => guardarTurno(text)} >Elegir</a>
          </Space>
        ),
      responsive: ['sm'],
      align: "center",
    },
  ];


  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
    />
  );
}

export default SelectorHorarios;