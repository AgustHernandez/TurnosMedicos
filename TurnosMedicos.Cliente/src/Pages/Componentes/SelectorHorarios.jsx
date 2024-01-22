import { useState, useEffect } from 'react';
import '../../App.css';
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
        render: (_, record) => (
            <Space size="middle">
                <a>Elegir {record.name}</a>
            </Space>
        ),
        responsive: ['lg'],
    },
];

const data = [
    {
        key: '1',
        horario: '09:00',
    },
    {
        key: '2',
        horario: '09:30',
    },
    {
        key: '3',
        horario: '10:00',
    },
    {
        key: '4',
        horario: '10:30',
    },
    {
        key: '5',
        horario: '11:00',
    },
    {
        key: '6',
        horario: '11:30',
    },
    {
        key: '7',
        horario: '12:00',
    },
];


function SelectorHorarios () {

    return (
        <Table 
        columns={columns} 
        dataSource={data} 
        size="small"
        bordered
        />
    )

}

export default SelectorHorarios