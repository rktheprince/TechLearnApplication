import React from 'react';
import axios from 'axios';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
class AddCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.courseChange = this.courseChange.bind(this);
        this.submitCourse = this.submitCourse.bind(this);
    }
    initialState = {
        courseId:'', courseName:'', courseDuration:'', instructor: '', fees:'', capacity:'', instructorId: ''
    };
    resetCourse=()=>{
        this.setState(()=>this.initialState);
    }
    submitCourse = event => {
        // alert('CourseId:' + this.state.courseId + ',CourseName:' + this.state.courseName + ',courseDuration:' + this.state.courseDuration + ',Instructor:' + this.state.instructor + ',Fee:' + this.state.fee + ',InstructorId:' + this.state.instructorId + ',Capacity:' + this.state.capacity);
        event.preventDefault();
        const course = {
            courseId:this.state.courseId,
            courseName:this.state.courseName,
            courseDuration:this.state.courseDuration,
            instructor:this.state.instructor,
            fees:this.state.fees,
            capacity:this.state.capacity,
            instructorId:this.state.instructorId
        };

        axios.post("http://localhost:9090/createcourse",course)
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

    courseChange =event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const { courseId, courseName,courseDuration,instructor,fees,instructorId,capacity } = this.state;
        return (
            <Card className="border border-dark bg-dark text-white text-center alignItems-center">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Course</Card.Header>

                <Form onReset={this.resetCourse} onSubmit={this.submitCourse} id="courseFormId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCourseId">
                                <Form.Label>Course Id</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="courseId" placeholder="Enter course Id" className={"bg-dark text-white"} value={courseId} onChange={this.courseChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCourseName">
                                <Form.Label>Course Name</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="courseName" placeholder="Enter course Name" className={"bg-dark text-white"} value={courseName} onChange={this.courseChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCourseDuration">
                                <Form.Label>Course Duration</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="courseDuration" placeholder="Enter course Duration" className={"bg-dark text-white"} value={courseDuration} onChange={this.courseChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridInstructor">
                                <Form.Label>Instructor</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="instructor" placeholder="Enter instructor Name" className={"bg-dark text-white"} value={instructor} onChange={this.courseChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridFee">
                                <Form.Label>Fee</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="fees" placeholder="Enter course Fee" className={"bg-dark text-white"} value={fees} onChange={this.courseChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCapacity">
                                <Form.Label>Capacity</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="capacity" placeholder="Enter course Capacity" className={"bg-dark text-white"} value={capacity} onChange={this.courseChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridInstructorId">
                                <Form.Label>Instructor Id</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="instructorId" placeholder="Enter Instructor Id" className={"bg-dark text-white"} value={instructorId} onChange={this.courseChange} />
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
export default AddCourse;