import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Row,Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser,faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import Footer1 from './AboutUs/Footer';
import Navigation from './Navigation/NavigationBar';
import Course from './Courses';
import {AboutUsFinal} from './AboutUs/About';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Welcome from './Welcome';
import {ContactUsFinal} from './ContactUs/Contact';
import Register from './Logins/Register';
import Login from './Logins/Login';
import UpdatePass from './Logins/UpdatePassword';
import LeaderBoard from './Students/LeaderBoardDashBoard';
import CreateLeaderBoard from './Students/LeaderBoard';
import Enroll from './Students/EnrollStudent';
import Eligibile from './Students/CheckEligibility';
import Attendance from './Students/Attendance';
import { Navbar,Nav } from 'react-bootstrap';
function Home2()
{
    return(
        <Navbar bg="dark" variant="dark">
                <Link to ={""} className="navbar-brand">
                <img class="rounded-circle" src={tech} style={{height:"25px" ,width:"25px"}} alt="Logo" data-holder-rendered="true" />TechLearn
                </Link>
    
                <Nav className="mr-auto">
                    <Link to ={""} className="nav-link font-weight-bold">Home</Link>
                    {/* <Link to ={"addcourse"} className="nav-link font-weight-bold">Add Courses</Link>*/}
                    <Link to ={"course"} className="nav-link font-weight-bold">Courses</Link> 
                    <Link to ={"AboutUs"} className="nav-link font-weight-bold">AboutUs</Link>
                    <Link to ={"ContactUs"} className="nav-link font-weight-bold">ContactUs</Link>
                    <Link to ={"UpdatePassword"} className="nav-link font-weight-bold">Update</Link>
                    <Link to ={"LeaderBoardDashBoard"} className="nav-link font-weight-bold">LeaderBoard</Link>
                    {/*<Link to ={"LeaderBoard"} className="nav-link font-weight-bold">CreateLeaderBoard</Link>*/}
                    <Link to ={"EnrollStudent"} className="nav-link font-weight-bold">Enroll</Link>
                    <Link to ={"CheckEligibility"} className="nav-link font-weight-bold">Eligible</Link>
                    <Link to ={"Attendance"} className="nav-link font-weight-bold">Attendance</Link>
                </Nav>
                <ul class="nav navbar-nav navbar-right">  
      <li><Link to={"Register"} className="text-white"><FontAwesomeIcon icon={faUser}  />&nbsp;SignUp </Link></li>&nbsp;&nbsp;&nbsp; 
      <li><Link to={"Login"} className="text-white"><FontAwesomeIcon icon={faSignInAlt}/>&nbsp;Login</Link></li>  
                </ul>  
            </Navbar>

    );
}
export default Home2;