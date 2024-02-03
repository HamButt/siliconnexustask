import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {TextField} from '@mui/material';
import styled  from "@emotion/styled";
    

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#869497",
  },
});

function ItemizedDeduction() {
  return (

    <div >
        <p className='mt-10 mb-5'>Itemized Collection</p>

        <div className='space-y-1'>

            <Accordion className=''>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-black'/>}
                className='bg-[#EBEFF9] text-[#1B1B1B]'
                >
                   Medical/Dental
                </AccordionSummary>
                <AccordionDetails>
                    <StyledTextField className='text-field' label="Dental Exp" size="small" type='text' placeholder='Enter' focused InputProps={{ sx: { borderRadius: 2 } }}/>
                    <StyledTextField className='text-field' type='text' size="small" label="Health Ins (Post Tax)" placeholder='Enter'   InputProps={{ sx: { borderRadius: 2 } }} focused />
                    <StyledTextField className='text-field' type='text' size="small" label="Prescription Cost" placeholder='Enter'  InputProps={{ sx: { borderRadius: 2 } }} focused />
                    <StyledTextField className='text-field' type='text' size="small" label="Medical Exp" placeholder='Enter'  InputProps={{ sx: { borderRadius: 2 } }} focused />
                    <StyledTextField className='text-field' type='text' size="small" label="Dental Ins (Post Tax)" placeholder='Enter'  InputProps={{ sx: { borderRadius: 2 } }} focused />
                </AccordionDetails>
            </Accordion>
            
            <Accordion className=''>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-black'/>}
                className='bg-[#EBEFF9] text-[#1B1B1B]'
                >
                   Taxes and Interest
                </AccordionSummary>
                <AccordionDetails>
                    <StyledTextField className='text-field' label="Dental Exp" size="small" type='text' placeholder='Enter' focused InputProps={{ sx: { borderRadius: 2 } }}/>
                    <StyledTextField className='text-field' type='text' size="small" label="Health Ins (Post Tax)" placeholder='Enter'   InputProps={{ sx: { borderRadius: 2 } }} focused />
                    <StyledTextField className='text-field' type='text' size="small" label="Prescription Cost" placeholder='Enter'  InputProps={{ sx: { borderRadius: 2 } }} focused />
                    <StyledTextField className='text-field' type='text' size="small" label="Medical Exp" placeholder='Enter'  InputProps={{ sx: { borderRadius: 2 } }} focused />
                    <StyledTextField className='text-field' type='text' size="small" label="Dental Ins (Post Tax)" placeholder='Enter'  InputProps={{ sx: { borderRadius: 2 } }} focused />
                </AccordionDetails>
            </Accordion>
            <Accordion className=''>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-black'/>}
                className='bg-[#EBEFF9] text-[#1B1B1B]'
                >
                   Gifts to Charity
                </AccordionSummary>
                <AccordionDetails>
                    <StyledTextField className='text-field' label="Dental Exp" size="small" type='text' placeholder='Enter' focused InputProps={{ sx: { borderRadius: 2 } }}/>
                    <StyledTextField className='text-field' type='text' size="small" label="Health Ins (Post Tax)" placeholder='Enter'   InputProps={{ sx: { borderRadius: 2 } }} focused />
                    <StyledTextField className='text-field' type='text' size="small" label="Prescription Cost" placeholder='Enter'  InputProps={{ sx: { borderRadius: 2 } }} focused />
                    <StyledTextField className='text-field' type='text' size="small" label="Medical Exp" placeholder='Enter'  InputProps={{ sx: { borderRadius: 2 } }} focused />
                    <StyledTextField className='text-field' type='text' size="small" label="Dental Ins (Post Tax)" placeholder='Enter'  InputProps={{ sx: { borderRadius: 2 } }} focused />
                </AccordionDetails>
            </Accordion>
            <Accordion className=''>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-black'/>}
                className='bg-[#EBEFF9] text-[#1B1B1B]'
                >
                   Military Expenses
                </AccordionSummary>
                <AccordionDetails>
                    <StyledTextField className='text-field' label="Dental Exp" size="small" type='text' placeholder='Enter' focused InputProps={{ sx: { borderRadius: 2 } }}/>
                    <StyledTextField className='text-field' type='text' size="small" label="Health Ins (Post Tax)" placeholder='Enter'   InputProps={{ sx: { borderRadius: 2 } }} focused />
                    <StyledTextField className='text-field' type='text' size="small" label="Prescription Cost" placeholder='Enter'  InputProps={{ sx: { borderRadius: 2 } }} focused />
                    <StyledTextField className='text-field' type='text' size="small" label="Medical Exp" placeholder='Enter'  InputProps={{ sx: { borderRadius: 2 } }} focused />
                    <StyledTextField className='text-field' type='text' size="small" label="Dental Ins (Post Tax)" placeholder='Enter'  InputProps={{ sx: { borderRadius: 2 } }} focused />
                </AccordionDetails>
            </Accordion>
        
        </div>
    </div>
  )
}

export default ItemizedDeduction