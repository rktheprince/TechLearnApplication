import './App.css';
import { Container, Row,Col} from 'react-bootstrap';
import Footer1 from './Components/AboutUs/Footer';
import Navigation from './Components/Navigation/NavigationBar';
import Course from './Components/Courses';
import AddCourse from './Components/AddCourse';
import {AboutUsFinal} from './Components/AboutUs/About';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Welcome from './Components/Welcome';
import Course2 from './Components/Course2';
import {ContactUsFinal} from './Components/ContactUs/Contact';
import Register from './Components/Logins/Register';
import Login from './Components/Logins/Login';
import UpdatePass from './Components/Logins/UpdatePassword';
import LeaderBoard from './Components/Students/LeaderBoardDashBoard';
import CreateLeaderBoard from './Components/Students/LeaderBoard';
import Enroll from './Components/Students/EnrollStudent';
import Eligibile from './Components/Students/CheckEligibility';
import Attendance from './Components/Students/Attendance';
import ForgetPassword from './Components/Logins/ForgetPassword';
function App() {
  const marginTop ={
    marginTop:"20px"
  };
  return (
    <Router>
      <Navigation />
      <Container>
        <Row>
         <Col lg={12} style={marginTop}>
          <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/course" exact component={Course}/>
            <Route path="/addcourse" exact component={AddCourse}/>
            <Route path="/AboutUs" exact component={AboutUsFinal}/>
            <Route path="/ContactUs" exact component={ContactUsFinal}/>
            <Route path="/Register" exact component={Register}/>
            <Route path="/Login" exact component={Login}/>
            <Route path="/UpdatePassword" exact component={UpdatePass}/>
            <Route path="/LeaderBoardDashBoard" exact component={LeaderBoard}/>
            <Route path="/LeaderBoard" exact component={CreateLeaderBoard}/>
            <Route path="/EnrollStudent" exact component={Enroll}/>
            <Route path="/CheckEligibility" exact component={Eligibile}/>
            <Route path="/Attendance" exact component={Attendance}/>
            <Route path="/course2" exact component={Course2}/>
            <Route path="/ForgetPassword" exact component={ForgetPassword}/>
          </Switch>
         </Col>
        </Row>
      </Container>
      <Footer1 style={{ backgroundColor: "Tarawera", margin: "auto" }} />
    </Router>

  );
}

export default App;
