import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faPlusSquare, faSave, faUndo ,faKey} from '@fortawesome/free-solid-svg-icons';
import {authenticateUser} from '../../services/index';//.. to come out from folder ,. to come out from class
import ForgetPassword from './ForgetPassword';
var userFound=true;
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.loginChange = this.loginChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    initialState = {
        userId:'', password:'', type: 'password'
    };
    resetLogin=()=>{
        this.setState(()=>this.initialState);
    }
    forgetPass() {
        this.props.history.push("/ForgetPassword");
      }
    submitLogin = event => {
        // alert('CourseId:' + this.state.courseId + ',CourseName:' + this.state.courseName + ',courseDuration:' + this.state.courseDuration + ',Instructor:' + this.state.instructor + ',Fee:' + this.state.fee + ',InstructorId:' + this.state.instructorId + ',Capacity:' + this.state.capacity);
        event.preventDefault();
        const login = {
            userId:this.state.userId,
            password:this.state.password,
        };
    }
    
 

    loginChange =event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleClick = () => this.setState(({type}) => ({
        type: type === 'text' ? 'password' : 'text'
      }))
    
  
    validateUser = () => { // function
        this.props.authenticateUser(this.state.userId, this.state.password);
            setTimeout(() => {
                
                if(this.props.auth.isLoggedIn) {
                    console.log("hii",this.props.auth.isLoggedIn)
                    return this.props.history.push("/");//for redirecting to home page
                }
               
                else {
                    alert("Invalid user ID or password");
                    this.setState({"error":"Invalid email and password"});
                    this.resetLogin();
                    
                }
            }, 500);
        };
    

   
    render() {
        const {userId, password} = this.state;
        return (
            <Card className="border border-dark bg-dark text-white text-center">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Log In</Card.Header>

 

                <Form onReset={this.resetLogin} onSubmit={this.submitLogin} onClick={this.ForgetPass} id="LoginFormId" style={{height:"42vh",margin:"auto",marginBottom:"50px"}}>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridUserId">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control  autoComplete="off" type="text" name="userId" placeholder="Enter userId" className={"bg-dark text-white"} value={userId} onChange={this.loginChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  autoComplete="off" type={this.state.type} name="password" placeholder="Enter password" className={"bg-dark text-white"} value={password} onChange={this.loginChange} />
                                <span className="password__show" style={{position: "absolute", top: "38px", left: "180px", cursor: "pointer"}} onClick={this.handleClick}>{this.state.type === 'text' ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}</span>
                                {/* <Form.Control  autoComplete="off" type="text" name="password" placeholder="Enter password" className={"bg-dark text-white"} value={password} onChange={this.loginChange} /> */}
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{ "text-align": "right" }}>
                        <Button size="sm" variant="success" type="submit" onClick={this.validateUser}>
                            <FontAwesomeIcon icon={faSave} /> Submit
  </Button>{'  '}
                        <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo} /> Reset
  </Button>{'  '}
                        
                         <Button size="sm" variant="info" type="submit" onClick={this.forgetPass.bind(this)}>
                            <FontAwesomeIcon icon={faKey} /> Forget Password
  </Button>{'  '}



                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}
const mapStateToProps = state => {
    return {
        auth:state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authenticateUser: (userId, password) => dispatch(authenticateUser(userId, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);