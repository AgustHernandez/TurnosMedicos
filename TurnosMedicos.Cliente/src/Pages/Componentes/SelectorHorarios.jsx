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
      columnWidth: 10,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
          <Space>
            <a onClick={() => guardarTurno(record.codTurno)} >Elegir</a>
          </Space>
        ),
      responsive: ['sm'],
      align: "center",
      columnWidth: 10,
    },
  ];


  return (
    <Table
      columns={columns}
      dataSource={data}
      size='small'
      bordered
      hideOnSinglePage={true}
    />
  );
}

export default SelectorHorarios;