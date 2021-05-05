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
                    <Link to ={""} className="nav-link font-weight-bold">Home</Link>
                    <Link to ={"addcourse"} className="nav-link font-weight-bold">Add Courses</Link>
                    <Link to ={"course"} className="nav-link font-weight-bold">Courses</Link>
                    <Link to ={"AboutUs"} className="nav-link font-weight-bold">AboutUs</Link>
                    <Link to ={"ContactUs"} className="nav-link font-weight-bold">ContactUs</Link>
                </Nav>
                <ul class="nav navbar-nav navbar-right">  
      <li><Link to={"Register"} className="text-white"><FontAwesomeIcon icon={faUser}  />&nbsp;SignUp </Link></li>&nbsp;&nbsp;&nbsp; 
      <li><Link to={"Login"} className="text-white"><FontAwesomeIcon icon={faSignInAlt}/>&nbsp;Login</Link></li>  
                </ul>  
            </Navbar>

        );
    }
}
export default NavigationBar;