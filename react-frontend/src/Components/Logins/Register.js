import React from 'react';
import axios from 'axios';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.userChange = this.userChange.bind(this);
        this.submitUser = this.submitUser.bind(this);
    }
    initialState = {
        firstName:'', lastName:'', emailId:'', phoneNo:'', address:'', aadhar:'', gender:'', dateOfBirth:''
    };
    resetUser=()=>{
        this.setState(()=>this.initialState);
    }
    submitUser = event => {
        // alert('CourseId:' + this.state.courseId + ',CourseName:' + this.state.courseName + ',courseDuration:' + this.state.courseDuration + ',Instructor:' + this.state.instructor + ',Fee:' + this.state.fee + ',InstructorId:' + this.state.instructorId + ',Capacity:' + this.state.capacity);
        event.preventDefault();
        const register = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            emailId:this.state.emailId,
            phoneNo:this.state.phoneNo,
            address:this.state.address,
            aadhar:this.state.aadhar,
            gender:this.state.gender,
            dateOfBirth:this.state.dateOfBirth
        };

 

        axios.post("http://localhost:9090/createUser",register)
        .then(response=>{
            if(response.data != null){
                this.setState(this.initialState);
                alert(response.data);
            }
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

 

    userChange =event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const { firstName, lastName,emailId,phoneNo,address,aadhar,gender,dateOfBirth } = this.state;
        return (
            <Card className="border border-dark bg-dark text-white text-center alignItems-center">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Register</Card.Header>

 

                <Form onReset={this.resetUser} onSubmit={this.submitUser} id="UserFormId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="firstName" placeholder="Enter first name" className={"bg-dark text-white"} value={firstName} onChange={this.userChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="lastName" placeholder="Enter last name" className={"bg-dark text-white"} value={lastName} onChange={this.userChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmailId">
                                <Form.Label>Email Id</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="emailId" placeholder="Enter EmailId" className={"bg-dark text-white"} value={emailId} onChange={this.userChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPhoneNo">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" required autoComplete="off" name="phoneNo" placeholder="Enter phoneNo" className={"bg-dark text-white"} value={phoneNo} onChange={this.userChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="address" placeholder="Enter address" className={"bg-dark text-white"} value={address} onChange={this.userChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAadhar">
                                <Form.Label>Aadhar</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="aadhar" placeholder="Enter Aadhar" className={"bg-dark text-white"} value={aadhar} onChange={this.userChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridGender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="gender" placeholder="Enter M for male and F for female" className={"bg-dark text-white"} value={gender} onChange={this.userChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridDateOfBirth">
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control type="date" required autoComplete="off" name="dateOfBirth" placeholder="Enter date of birth" className={"bg-dark text-white"} value={dateOfBirth} onChange={this.userChange} />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{ "text-align": "right" }}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} /> Submit
  </Button>{'  '}
                        <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo} /> Reset
  </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}
export default Register;