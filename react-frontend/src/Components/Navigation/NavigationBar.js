import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import tech from './tech.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser,faSignInAlt} from '@fortawesome/free-solid-svg-icons';
class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to ={""} className="navbar-brand">
                <img class="rounded-circle" src={tech} style={{height:"25px" ,width:"25px"}} alt="Logo" data-holder-rendered="true" />TechLearn
                </Link>
    
                <Nav className="mr-auto">
                    <Link to ={""} className="nav-link">Home</Link>
                    <Link to ={"addcourse"} className="nav-link">Add Courses</Link>
                    <Link to ={"course"} className="nav-link">Courses</Link>
                    <Link to ={"AboutUs"} className="nav-link">AboutUs</Link>
                    <Link to ={"ContactUs"} className="nav-link">ContactUs</Link>
                </Nav>
                <ul class="nav navbar-nav navbar-right">  
      <li><a href="" className="text-white"><FontAwesomeIcon icon={faUser}  />&nbsp;SignUp </a></li>&nbsp;&nbsp;&nbsp; 
      <li><a href="#" className="text-white"><FontAwesomeIcon icon={faSignInAlt}/>&nbsp;Login</a></li>  
                </ul>  
            </Navbar>

        );
    }
}
export default NavigationBar;