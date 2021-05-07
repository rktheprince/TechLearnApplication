import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import tech from './tech.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { logoutUser } from '../../services/index';
class NavigationBar extends React.Component {

    logout = () => {
        this.props.logoutUser();
    };

    render() {

        const guestLinks = (
            <>
                <div className="mr-auto"></div>
                <Nav className="mr-auto">
                    <Link to={""} className="nav-link font-weight-bold">Home</Link>
                    <Link to={"course2"} className="nav-link font-weight-bold">Courses</Link>
                    <Link to={"LeaderBoardDashBoard"} className="nav-link font-weight-bold">LeaderBoard</Link>
                    <Link to={"ForgetPassword"} className="nav-link font-weight-bold">ForgetPassword</Link>
                    <Link to={"AboutUs"} className="nav-link font-weight-bold">AboutUs</Link>
                    <Link to={"ContactUs"} className="nav-link font-weight-bold">ContactUs</Link>
                </Nav>
                <Nav className="navbar-right">
                    <Link to={"Register"} className="text-white"><FontAwesomeIcon icon={faUser} />&nbsp;SignUp </Link>'   '
                        <Link to={"Login"} className="text-white"><FontAwesomeIcon icon={faSignInAlt} />&nbsp;Login</Link>
                </Nav>
            </>
        );

        const userLinks = (
            <>
                <Nav className="mr-auto">

                    <Link to={""} className="nav-link font-weight-bold">Home</Link>
                    <Link to={"addcourse"} className="nav-link font-weight-bold">Add Courses</Link>
                    <Link to={"course"} className="nav-link font-weight-bold">Courses</Link>
                    <Link to={"AboutUs"} className="nav-link font-weight-bold">AboutUs</Link>
                    <Link to={"ContactUs"} className="nav-link font-weight-bold">ContactUs</Link>
                    <Link to={"UpdatePassword"} className="nav-link font-weight-bold">Update</Link>
                    <Link to={"LeaderBoardDashBoard"} className="nav-link font-weight-bold">LeaderBoard</Link>
                    <Link to={"LeaderBoard"} className="nav-link font-weight-bold">CreateLeaderBoard</Link>
                    <Link to={"EnrollStudent"} className="nav-link font-weight-bold">Enroll</Link>
                    <Link to={"CheckEligibility"} className="nav-link font-weight-bold">Eligible</Link>
                    <Link to={"Attendance"} className="nav-link font-weight-bold">Attendance</Link>
                    {/* <Link to={"ForgetPassword"} className="nav-link font-weight-bold">ForgetPassword</Link> */}
                </Nav>
                <Nav className="navbar-right">
                    <Link to={"/"} className="nav-link" onClick={this.logout}> Logout</Link>
                </Nav>
            </>
        );
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img class="rounded-circle" src={tech} style={{ height: "25px", width: "25px" }} alt="Logo" data-holder-rendered="true" />TechLearn
                </Link>
                {this.props.auth.isLoggedIn ? userLinks : guestLinks}
            </Navbar>

            /*{ <Nav className="mr-auto">
                <Link to ={""} className="nav-link font-weight-bold">Home</Link>
                <Link to ={"addcourse"} className="nav-link font-weight-bold">Add Courses</Link>
                <Link to ={"course"} className="nav-link font-weight-bold">Courses</Link>
                <Link to ={"AboutUs"} className="nav-link font-weight-bold">AboutUs</Link>
                <Link to ={"ContactUs"} className="nav-link font-weight-bold">ContactUs</Link>
                <Link to ={"UpdatePassword"} className="nav-link font-weight-bold">Update</Link>
                <Link to ={"LeaderBoardDashBoard"} className="nav-link font-weight-bold">LeaderBoard</Link>
                <Link to ={"LeaderBoard"} className="nav-link font-weight-bold">CreateLeaderBoard</Link>
                <Link to ={"EnrollStudent"} className="nav-link font-weight-bold">Enroll</Link>
                <Link to ={"CheckEligibility"} className="nav-link font-weight-bold">Eligible</Link>
                <Link to ={"Attendance"} className="nav-link font-weight-bold">Attendance</Link>
            </Nav> }*/
            /*{ <ul class="nav navbar-nav navbar-right">  
  <li><Link to={"Register"} className="text-white"><FontAwesomeIcon icon={faUser}  />&nbsp;SignUp </Link></li>&nbsp;&nbsp;&nbsp; 
  <li><Link to={"Login"} className="text-white"><FontAwesomeIcon icon={faSignInAlt}/>&nbsp;Login</Link></li>  
            </ul>   }*/






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