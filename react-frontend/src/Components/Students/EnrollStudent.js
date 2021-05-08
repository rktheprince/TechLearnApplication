import React from 'react';
import axios from 'axios';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
class EnrollStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.EnrollChange = this.EnrollChange.bind(this);
        this.submitEnroll = this.submitEnroll.bind(this);
    }
    initialState = {
        courseName:'',phoneNo:'',emiCount:'',course:[]

    };
    resetEnroll=()=>{
        this.setState(()=>this.initialState);
    }
    submitEnroll = event => {
        // alert('CourseId:' + this.state.courseId + ',CourseName:' + this.state.courseName + ',courseDuration:' + this.state.courseDuration + ',Instructor:' + this.state.instructor + ',Fee:' + this.state.fee + ',InstructorId:' + this.state.instructorId + ',Capacity:' + this.state.capacity);
        event.preventDefault();
        const enroll = {
            courseName:this.state.courseName,
            phoneNo:this.state.phoneNo,
            emiCount:this.state.emiCount,
            course:this.state.course
        };

        axios.post("http://localhost:9090/createStudentCourse",enroll)
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

    EnrollChange =event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const { courseName,phoneNo,emiCount } = this.state;
        return (
            <Card className="border border-dark bg-dark text-white text-center alignItems-center">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Enroll Student</Card.Header>

                <Form onReset={this.resetEnroll} onSubmit={this.submitEnroll} id="EnrollFormId" style={{ width: "30rem" ,margin:"auto",marginBottom:"54px",height:"40vh"}}>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCourseName">
                                <Form.Label>Course Name</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="courseName" placeholder="Enter course name" className={"bg-dark text-white"} value={courseName} onChange={this.EnrollChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPhoneNo">
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="phoneNo" placeholder="Enter phone no" className={"bg-dark text-white"} value={phoneNo} onChange={this.EnrollChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmiCount">
                                <Form.Label>Emi Count</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="emiCount" placeholder="Enter Emi Count" className={"bg-dark text-white"} value={emiCount} onChange={this.EnrollChange} />
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
export default EnrollStudent;