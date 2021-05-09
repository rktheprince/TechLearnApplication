import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import tech from './tech.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { logoutUser } from '../../services/index';//function imported
class NavigationBar extends React.Component {

    logout = () => {
        this.props.logoutUser();// to store the respone of logout function
    };

    render() {

        const guestLinks = (// navbar links for before login
            <>
                <div className="mr-auto"></div>
                <Nav className="mr-auto">
                    <Link to={"course2"} className="nav-link font-weight-bold">Courses</Link>
                    <Link to={"AboutUs"} className="nav-link font-weight-bold">About Us</Link>
                    <Link to={"ContactUs"} className="nav-link font-weight-bold">Contact Us</Link>
                </Nav>
                <Nav className="navbar-right">
                    <Link to={"Register"} className="text-white"><FontAwesomeIcon icon={faUser} />&nbsp;Sign Up </Link>'   '
                    <Link to={"Login"} className="text-white"><FontAwesomeIcon icon={faSignInAlt} />&nbsp;Login</Link>
                </Nav>
            </>
        );

        const userLinks = (// nav links after login
            <>
                <Nav className="mr-auto">
                    <Link to={"course2"} className="nav-link font-weight-bold">Courses</Link>
                    <Link to={"UpdatePassword"} className="nav-link font-weight-bold">Update Password</Link>
                    <Link to={"LeaderBoardDashBoard"} className="nav-link font-weight-bold">Leaderboard</Link>
                    <Link to={"EnrollStudent"} className="nav-link font-weight-bold">Enroll</Link>
                    <Link to={"CheckEligibility"} className="nav-link font-weight-bold">Eligible</Link>
                    <Link to={"Attendance"} className="nav-link font-weight-bold">Attendance</Link>
                    <Link to={"AboutUs"} className="nav-link font-weight-bold">About Us</Link>
                    <Link to={"ContactUs"} className="nav-link font-weight-bold">Contact Us</Link>
                </Nav>
                <Nav className="navbar-right">
                    <Link to={"/"} className="nav-link" onClick={this.logout}> Logout</Link>
                </Nav>
            </>
        );


        const adminLinks = (// nav bar links
            <>
                <Nav className="mr-auto">
                    <Link to={"addcourse"} className="nav-link font-weight-bold">Add Courses</Link>
                    <Link to={"course"} className="nav-link font-weight-bold">Courses</Link>
                    <Link to={"LeaderBoardDashBoard"} className="nav-link font-weight-bold">Leaderboard</Link>
                    <Link to={"LeaderBoard"} className="nav-link font-weight-bold">Create Leaderboard</Link>
                    <Link to={"AboutUs"} className="nav-link font-weight-bold">About Us</Link>
                    <Link to={"ContactUs"} className="nav-link font-weight-bold">Contact Us</Link>
                </Nav>
                <Nav className="navbar-right">
                    <Link to={"/"} className="nav-link" onClick={this.logout}> Logout</Link>
                </Nav>
            </>
        );

        function Links(x) {// for switing between the links like admin,user
            if(x==="user56"){
                console.log("admin")
                return adminLinks
            }
            else{
                console.log("not admin")
                return userLinks
            }

        }



        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img class="rounded-circle" src={tech} style={{ height: "25px", width: "25px" }} alt="Logo" data-holder-rendered="true" />TechLearn
                </Link>
                {this.props.auth.isLoggedIn ? Links(this.props.auth.isLoggedIn) : guestLinks} 
            </Navbar>

           


        );
    };
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);