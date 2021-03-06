import React from 'react';
import axios from 'axios';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
class CheckEligibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.EligibilityChange = this.EligibilityChange.bind(this);
        this.submitEligibility = this.submitEligibility.bind(this);
    }
    initialState = {
        userId:'',password:'',courseName:''

    };
    resetEligibility=()=>{
        this.setState(()=>this.initialState);
    }
    submitEligibility = event => {
        // alert('CourseId:' + this.state.courseId + ',CourseName:' + this.state.courseName + ',courseDuration:' + this.state.courseDuration + ',Instructor:' + this.state.instructor + ',Fee:' + this.state.fee + ',InstructorId:' + this.state.instructorId + ',Capacity:' + this.state.capacity);
        event.preventDefault();
        const eligibility = {
            
            userId:this.state.userId,
            password:this.state.password,
            courseName:this.state.courseName
        };

        axios.post("http://localhost:9090/checkeligibity",eligibility)
        .then(response=>{
            if(response.data != null){
                this.setState(this.initialState);
                alert(response.data);
            }
        });
    }
   

    EligibilityChange =event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const { userId,password,courseName } = this.state;
        return (
            <Card className="border border-dark bg-dark text-white text-center alignItems-center">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Eligibility Student</Card.Header>

                <Form onReset={this.resetEligibility} onSubmit={this.submitEligibility} id="EligibilityFormId" style={{ width: "30rem" } }>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridUserId">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="userId" placeholder="Enter user Id" className={"bg-dark text-white"} value={userId} onChange={this.EligibilityChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="password" placeholder="Enter password" className={"bg-dark text-white"} value={password} onChange={this.EligibilityChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCourseName">
                                <Form.Label>Course Name</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="courseName" placeholder="Enter Course Name" className={"bg-dark text-white"} value={courseName} onChange={this.EligibilityChange} />
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
export default CheckEligibility;