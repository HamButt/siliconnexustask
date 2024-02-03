import React from 'react'
import { Button } from '@mui/material'
import { ActionsIcons } from '../SidebarIcons/Icons';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell, Pagination,} from "@nextui-org/table";


function BusinessStats() {
  
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

            <Table isStriped  className='py-8' >
              <TableHeader>
                <TableColumn>Sr#.</TableColumn>
                <TableColumn>Business Name</TableColumn>
                <TableColumn>Date</TableColumn>
                <TableColumn>Form Type</TableColumn>
                <TableColumn>Status</TableColumn>
                <TableColumn>Comments</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>1</TableCell>
                  <TableCell>Furniture</TableCell>
                  <TableCell>December 09, 2023</TableCell>
                  <TableCell>Manual</TableCell>
                  <TableCell>Data Entry</TableCell>
                  <TableCell>Lorem ipsum</TableCell>
                  <TableCell><ActionsIcons/></TableCell>
                </TableRow>
                <TableRow key="2">
                <TableCell>2</TableCell>
                  <TableCell>Furniture</TableCell>
                  <TableCell>December 09, 2023</TableCell>
                  <TableCell>Manual</TableCell>
                  <TableCell>Data Entry</TableCell>
                  <TableCell>Lorem ipsum</TableCell>
                  <TableCell><ActionsIcons/></TableCell>
                </TableRow>
                <TableRow key="3">
                <TableCell>3</TableCell>
                  <TableCell>Furniture</TableCell>
                  <TableCell>December 09, 2023</TableCell>
                  <TableCell>Manual</TableCell>
                  <TableCell>Data Entry</TableCell>
                  <TableCell>Lorem ipsum</TableCell>
                  <TableCell><ActionsIcons/></TableCell>
                </TableRow>
              </TableBody>
            </Table>

           

        </div>
    </>
  )
}

export default BusinessStats