import React from 'react';
import { Card, Form, Button,Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlusSquare,faSave } from '@fortawesome/free-solid-svg-icons';
class AddCourse extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={courseId:'',courseName:'',courseDuration:'',instructor:'',fee:'',capacity:'',instructorId:''};
        this.courseChange=this.courseChange.bind(this);
        this.submitCourse=this.submitCourse.bind(this);
    }
    submitCourse(event)
    {
        alert('CourseId:'+this.state.courseId+',CourseName:'+this.state.courseName+',courseDuration:'+this.state.courseDuration+',Instructor:'+this.state.instructor+',Fee:'+this.state.fee+',InstructorId:'+this.state.instructorId+',Capacity:'+this.state.capacity);
        event.preventDefault();
    }

    courseChange(event)
    {
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    render() {
        return (
            <Card className="border border-dark bg-dark text-white text-center alignItems-center">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> AddCourse</Card.Header>

                <Form onSubmit={this.submitCourse} id="courseFormId" style={{ width: "30rem"}}>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridcourseId">
                                <Form.Label>courseId</Form.Label>
                                <Form.Control required type="text" name="courseId" placeholder="Enter course Id" className={"bg-dark text-white"} value={this.state.courseId} onChange={this.courseChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridcourseName">
                                <Form.Label>courseName</Form.Label>
                                <Form.Control type="text" required name="courseName" placeholder="Enter course Name" className={"bg-dark text-white"} value={this.state.courseName} onChange={this.courseChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridcourseDuration">
                                <Form.Label>courseDuration</Form.Label>
                                <Form.Control type="text" required name="courseDuration" placeholder="Enter course Duration" className={"bg-dark text-white"} value={this.state.courseDuration} onChange={this.courseChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridinstructor">
                                <Form.Label>instructor</Form.Label>
                                <Form.Control type="text" required name="instructor" placeholder="Enter instructor Name" className={"bg-dark text-white"} value={this.state.instructor} onChange={this.courseChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridfee">
                                <Form.Label>fee</Form.Label>
                                <Form.Control type="text" required name="fee" placeholder="Enter course Fee" className={"bg-dark text-white"} value={this.state.fee} onChange={this.courseChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridcapacity">
                                <Form.Label>capacity</Form.Label>
                                <Form.Control type="text" required name="capacity" placeholder="Enter course Capacity" className={"bg-dark text-white"} value={this.state.capacity} onChange={this.courseChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridinstructorId">
                                <Form.Label>instructorId</Form.Label>
                                <Form.Control type="text" required name="instructorId" placeholder="Enter Instructor Id" className={"bg-dark text-white"} value={this.state.instructorId} onChange={this.courseChange} />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"text-align":"right"}}>
                        <Button size="sm" variant="success" type="submit">
                        <FontAwesomeIcon icon={faSave} /> Submit
  </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}
export default AddCourse;