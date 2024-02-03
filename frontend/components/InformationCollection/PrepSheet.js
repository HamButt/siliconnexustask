import React from 'react'
import {TextField} from '@mui/material';
import styled  from "@emotion/styled";
    

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#869497",
    responsive: ['xs'],
  },
});

function PrepSheet() {
  return (
    <div className='mt-10'>
        <p>Basic Information</p>
        <form className='mt-5 flex flex-wrap items-center justify-evenly'>
                <StyledTextField className='text-field' label="First Name" size="small" type="text" placeholder="Enter" focused InputProps={{ sx: { borderRadius: 2 } }} />
                <StyledTextField className='text-field' type='text' size="small" label="Middle Name" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='text' size="small" label="Last Name" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='text' size="small" label="SSN" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='date' size="small" label="Date of birth"  InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='text' size="small" label="Address" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='text' size="small" label="City" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='text' size="small" label="State" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='text' size="small" label="Zip" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='text' size="small" label="Mobile Phone" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='text' size="small" label="Alternate#" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='text' size="small" label="Email Address" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='text' size="small" label="Driver's License" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='text' size="small" label="DL Issue by state" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' />
                <StyledTextField className='text-field' type='text' size="small" label="Occupation" InputProps={{ sx: { borderRadius: 2 } }} focused placeholder='Enter' /> 
                

        </form>
    </div>
  )
}

export default PrepSheet