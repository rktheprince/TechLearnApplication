import React from 'react';
import axios from 'axios';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
class UpdateAttendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.AttendanceChange = this.AttendanceChange.bind(this);
        this.submitAttendance = this.submitAttendance.bind(this);
    }
    initialState = {
        userId:'',password:'',courseName:''

    };
    resetAttendance=()=>{
        this.setState(()=>this.initialState);
    }
    submitAttendance = event => {
        // alert('CourseId:' + this.state.courseId + ',CourseName:' + this.state.courseName + ',courseDuration:' + this.state.courseDuration + ',Instructor:' + this.state.instructor + ',Fee:' + this.state.fee + ',InstructorId:' + this.state.instructorId + ',Capacity:' + this.state.capacity);
        event.preventDefault();
        const attendance = {
            
            userId:this.state.userId,
            password:this.state.password,
            courseName:this.state.courseName
        };

        axios.put("http://localhost:9090/updateAttendance2",attendance)
        .then(response=>{
            if(response.data != null){
                this.setState(this.initialState);
                alert(response.data);
            }
        });
    }
   

    AttendanceChange =event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const { userId,password,courseName } = this.state;
        return (
            <Card className="border border-dark bg-dark text-white text-center alignItems-center">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Attendance Student</Card.Header>

                <Form onReset={this.resetAttendance} onSubmit={this.submitAttendance} id="AttendanceFormId" style={{ width: "30rem" ,margin:"auto",marginBottom:"54px",height:"40vh"}}>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridUserId">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="userId" placeholder="Enter user Id" className={"bg-dark text-white"} value={userId} onChange={this.AttendanceChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="password" placeholder="Enter password" className={"bg-dark text-white"} value={password} onChange={this.AttendanceChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCourseName">
                                <Form.Label>Course Name</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="courseName" placeholder="Enter Course Name" className={"bg-dark text-white"} value={courseName} onChange={this.AttendanceChange} />
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
export default UpdateAttendance;