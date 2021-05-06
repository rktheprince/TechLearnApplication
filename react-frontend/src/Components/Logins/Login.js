import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
var userFound=true;
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.loginChange = this.loginChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    initialState = {
        userId:'', password:''
    };
    resetLogin=()=>{
        this.setState(()=>this.initialState);
    }
    submitLogin = event => {
        // alert('CourseId:' + this.state.courseId + ',CourseName:' + this.state.courseName + ',courseDuration:' + this.state.courseDuration + ',Instructor:' + this.state.instructor + ',Fee:' + this.state.fee + ',InstructorId:' + this.state.instructorId + ',Capacity:' + this.state.capacity);
        event.preventDefault();
        const login = {
            userId:this.state.userId,
            password:this.state.password,
        };

 

        axios.post("http://localhost:9090/login",login)
        .then(response=>{
            if(response.data ==="Login Successful welcome "+login.userId ){
                //userFound=true;
                console.log(response.data);
                this.setState(this.initialState);   
                alert(response.data);
                return this.props.history.push("/");
            }
            else if(response.data ==="Login UnSuccessful As Wrong Credentials" ){
                //userFound=true;
                console.log(response.data);
                this.setState(this.initialState);   
                alert(response.data);
                //return this.props.history.push("/");
            }
        }).catch((error)=>{
            console.error("Error"+error);

        });
    }
    // componentDidMount() {
    //     const requestOptions = {
    //         method: 'POST',
    //         body: JSON.stringify({CourseId:this.state.courseId,
    //             CourseName:this.state.courseName,
    //             courseDuration:this.state.courseDuration,
    //             Instructor:this.state.instructor,
    //             Fee:this.state.fee,
    //             capacity:this.state.capacity,
    //             instructorId:this.state.instructorId
    // })
    //     };
    //     fetch('http://localhost:9090/createcourse', requestOptions)
    //         .then(response => response.json())
    //         .then(data => this.setState({ postId: data.courseId }));
    // }

 

    loginChange =event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    // onSubmit = () => {
    //     if(userFound){
    //         return this.props.history.push("/");
    //     }
    //     else{
    //         userFound=false;
    //     }
    //  };
    render() {
        const {userId, password} = this.state;
        return (
            <Card className="border border-dark bg-dark text-white text-center alignItems-center">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Login</Card.Header>

 

                <Form onReset={this.resetLogin} onSubmit={this.submitLogin} id="LoginFormId" style={{ width: "30rem" }}>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridUserId">
                                <Form.Label>UserId</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="userId" placeholder="Enter userId" className={"bg-dark text-white"} value={userId} onChange={this.loginChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="password" placeholder="Enter password" className={"bg-dark text-white"} value={password} onChange={this.loginChange} />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{ "text-align": "right" }}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} /> Submit
  </Button>{'  '}
                        <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo} /> Reset
  </Button>{' '}
  <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo} /> Forget
  </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}
export default Login;