import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import "./createStudent.css";

export default function Create() {

    const [student, setStudent] = useState({
        regNo: 0,
        studentName: '',
        grade: '',
        section: '',
    });

    const createStudent = () => {
        axios.post('http://localhost:5000/students', student).then( () => {
            window.location.reload(false);
        })
    }

  return (
    <Box
      component="form"
      sx={{
        marginTop: '50px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '500' },
      }}
      noValidate
      autoComplete="off"
    >
      <h2 className="createTitle">Create Student Profile</h2>
      <TextField className="createField" id="outlined-basic" label="Registration No." variant="outlined" value={student.regNo} onChange={(event) => {
          setStudent({ ...student, regNo: event.target.value})
      }} />
      <TextField className="createField" id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event) => {
          setStudent({ ...student, studentName: event.target.value})
      }} />
      <TextField className="createField" id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event) => {
          setStudent({ ...student, grade: event.target.value})
      }} />
      <TextField className="createField" id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event) => {
          setStudent({ ...student, section: event.target.value})
      }} />
      <Button className="createButton" variant="contained" onClick={createStudent}>Create</Button>
    </Box>
  );
}
