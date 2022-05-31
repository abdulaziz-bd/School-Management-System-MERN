import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent.js';
import Topbar from './components/topbar/Topbar.js';
import Sidebar from './components/sidebar/Sidebar.js';
import Home from './pages/home/home.js';
import RegisterStudent from './pages/registerStudent/RegisterStudent.js';
import useStyles from './styles';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ViewStudents from './pages/viewStudents/ViewStudents.js';
import ShowProfile from './pages/showProfile/ShowProfile.js';
import UpdateStudent from './components/updateStudent/UpdateStudent';


function App() {

  const classes = useStyles();

  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<RegisterStudent />} />
          <Route path="/show" element={<ViewStudents />} />
          <Route path="/profile/" element={<ShowProfile />} />
          <Route path="/update" element={<ShowProfile />} />
          <Route path="/updateProfile" element={<UpdateStudent />} />
          
        </Routes>
      </div>
      {/* <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Students Create & Show
          </Typography>
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Student />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                  <Create />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>

      </Container> */}
    </Router>
  );
}

export default App;
