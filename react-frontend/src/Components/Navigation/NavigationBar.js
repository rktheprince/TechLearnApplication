import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to ={""} className="navbar-brand">
                <img src="C:\Users\Piyush\OneDrive\Desktop\Firstreact\myapp\public\tech.jpg" alt="TechLearn Logo" />TechLearn
                </Link>
    
                <Nav className="mr-auto">
                    <Link to ={""} className="nav-link">Home</Link>
                    <Link to ={"addcourse"} className="nav-link">Add Courses</Link>
                    <Link to ={"course"} className="nav-link">Courses</Link>
                    <Link to ={"AboutUs"} className="nav-link">AboutUs</Link>
                    <Link to ={"ContactUs"} className="nav-link">ContactUs</Link>
                </Nav>
            </Navbar>
        );
    }
}
export default NavigationBar;