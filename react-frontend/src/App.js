import './App.css';
import { Container, Row,Col} from 'react-bootstrap';
import Footer1 from './Components/AboutUs/Footer';
import Navigation from './Components/Navigation/NavigationBar';
import Course from './Components/Courses';
import AddCourse from './Components/AddCourse';
import {AboutUsFinal} from './Components/AboutUs/About';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Welcome from './Components/Welcome';
import {ContactUsFinal} from './Components/ContactUs/Contact';
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
          </Switch>
         </Col>
        </Row>
      </Container>
      <Footer1 style={{ backgroundColor: "Tarawera", margin: "auto" }} />
    </Router>

  );
}

export default App;
