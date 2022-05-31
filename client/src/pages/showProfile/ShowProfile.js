import React, { useState, useEffect } from 'react';
import "./showProfile.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ShowProfile() {

    const [studentList, setStudentList] = useState([])
    const [query, setQuery] = useState("")


    useEffect(() => {
        axios.get('http://localhost:5000/students').then( (allStudents) => {
            setStudentList(allStudents.data);
        } )
    }, [])

    const deleteStudent = (id) => {
        axios.delete(`http://localhost:5000/students/${id}`).then( () => {
            window.location.reload(false);
        })
    }

  return (
    <div className="showProfile">

        <>
            <div className="searchBox"> 
                <Box 
                    
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: 500 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField 
                    className="searchField" 
                    id="outlined-basic" 
                    label="Search here......" 
                    variant="outlined" 
                    value={query} 
                    onChange={ (event) => {setQuery(event.target.value)}}/>
                </Box>
            </div>
            <div className="showStudentBox">
                <h2 className='showTitle'>Students Information</h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Registration Number</TableCell>
                        <TableCell align="right">Grade</TableCell>
                        <TableCell align="right">Section</TableCell>
                        <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentList.filter( (student) => {
                            if (query === ""){
                                return student;
                            } else if (student.studentName.toLowerCase().includes(query.toLowerCase())){
                                return student;
                            }
                        }).map((student, key) => (
                        <TableRow
                            key={key}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            {student.studentName}
                            </TableCell>
                            <TableCell align="right">{student.regNo}</TableCell>
                            <TableCell align="right">{student.grade}</TableCell>
                            <TableCell align="right">{student.section}</TableCell>

                            <TableCell align="right">
                                <Button variant="outlined" size="small">
                                    <a href="/updateProfile">Edit</a> 
                                </Button>
                                <IconButton aria-label="delete" onClick={() => deleteStudent(student._id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>


    </div>
  )
}
