import React from 'react'
import { Button } from '@mui/material'
import { ActionsIcons } from '../SidebarIcons/Icons';
import Headbar from './Headbar';
import { Table } from 'antd'; 
        

function BusinessStats() {
  

  const data = [
    {
      serialNumber: '1',
      businessname: 'Furniture',
      date: "December 09, 2023",
      Form: "Manual",
      status: "Data Entry",
      comments: "Lorem ipsum",
      actions: <ActionsIcons/>
      
    },
    {
      serialNumber: '2',
      businessname: 'Furniture',
      date: "December 10, 2023",
      Form: "Manual",
      status: "Data Entry",
      comments: "Lorem ipsum",
      actions: <ActionsIcons/>
      
    },
    {
      serialNumber: '3',
      businessname: 'Furniture',
      date: "December 11, 2023",
      Form: "Manual",
      status: "Data Entry",
      comments: "Lorem ipsum",
      actions: <ActionsIcons/>
      
    },
  ];

  const columns = [
  {
    title: 'Sr#.',
    dataIndex: 'serialNumber',
    sorter: (a, b) => a.serialNumber - b.serialNumber,
    defaultSortOrder: 'ascend',
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Business Name',
    dataIndex: 'businessname',
    sorter: (a, b) => a.businessname.length - b.businessname.length,
    defaultSortOrder: 'ascend',
    sortDirections: ['descend', 'ascend'],
    responsive: ['lg'],
  },
  {
    title: 'Date',
    dataIndex: 'date',
    sorter: (a, b) => a.date.length - b.date.length,
    defaultSortOrder: 'ascend',
    sortDirections: ['descend', 'ascend'],
    // responsive: ['md'],
  },
  {
    title: 'Form Type',
    dataIndex: 'Form',
    sorter: (a, b) => a.Form.length - b.Form.length,
    defaultSortOrder: 'ascend',
    sortDirections: ['descend', 'ascend'],
    responsive: ['lg'],
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: (a, b) => a.status.length - b.status.length,
    defaultSortOrder: 'ascend',
    sortDirections: ['descend', 'ascend'],
    responsive: ['xl',],
  },
  {
    title: 'Comments',
    dataIndex: 'comments',
    sorter: (a, b) => a.comments.length - b.comments.length,
    defaultSortOrder: 'ascend',
    sortDirections: ['descend', 'ascend'],
    responsive: ['xs', 'md'],
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    sorter: (a, b) => a.actions - b.actions,
    defaultSortOrder: 'ascend',
    sortDirections: ['descend', 'ascend'],
    responsive: ['xs', 'lg'],
  },
];

  return (

    <>
        <div className='mx-5 px-5 bg-white'>

            <div className='flex items-center justify-between pt-8'>
                <div className='flex space-x-2'>
                    <div className='bg-[#00ADEF] w-[16px] h-[32px] rounded-sm'></div>
                    <p className='text-[#1B1B1B] text-[20px]' >Information Collection</p>
                </div>
                <Button variant='contained' className='bg-[#00ADEF] text-white capitalize'>Add new business</Button>
            </div>

            <Table className='pt-6 ' dataSource={data} columns={columns} />

        </div>
    </>
  )
}

export default BusinessStats