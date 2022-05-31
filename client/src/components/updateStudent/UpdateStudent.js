import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./updateStudent.css";

export default function UpdateStudent() {
  return (
    <div className="updateStudent">
        <Box
        component="form"
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > :not(style)': { m: 2},
        }}
        noValidate
        autoComplete="off"
        >
        <h2 className="updateTitle">Update Student Profile</h2>
        <TextField className="updateField" id="outlined-basic" label="Registration No." variant="outlined"  />
        <TextField className="updateField" id="outlined-basic" label="Name" variant="outlined" />
        <TextField className="updateField" id="outlined-basic" label="Grade" variant="outlined"  />
        <TextField className="updateField" id="outlined-basic" label="Section" variant="outlined" />
        </Box>
        <Button className="updateButton" variant="contained" >Update</Button>
        <Button className="updateCloseButton" variant="contained" >Close</Button>
        
    </div>
  )
}
