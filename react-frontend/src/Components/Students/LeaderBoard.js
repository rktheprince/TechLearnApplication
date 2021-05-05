import React from 'react';
import axios from 'axios';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.leaderChange = this.leaderChange.bind(this);
        this.submitLeader = this.submitLeader.bind(this);
    }
    initialState = {
        userid:'', coursename:'', marks:''

    };
    resetLeader=()=>{
        this.setState(()=>this.initialState);
    }
    submitLeader = event => {
        // alert('CourseId:' + this.state.courseId + ',CourseName:' + this.state.courseName + ',courseDuration:' + this.state.courseDuration + ',Instructor:' + this.state.instructor + ',Fee:' + this.state.fee + ',InstructorId:' + this.state.instructorId + ',Capacity:' + this.state.capacity);
        event.preventDefault();
        const leader = {
            userid:this.state.userid,
            coursename:this.state.coursename,
            marks:this.state.marks,
        };

        axios.post("http://localhost:9090/createLeaderboard",leader)
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

    leaderChange =event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const { userid,coursename,marks } = this.state;
        return (
            <Card className="border border-dark bg-dark text-white text-center alignItems-center">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> LeaderBoard</Card.Header>

                <Form onReset={this.resetLeader} onSubmit={this.submitLeader} id="LeaderFormId" style={{ width: "30rem" }}>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridUserId">
                                <Form.Label>UserId</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="userid" placeholder="Enter userid" className={"bg-dark text-white"} value={userid} onChange={this.leaderChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCourseName">
                                <Form.Label>Course Name</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="coursename" placeholder="Enter course name" className={"bg-dark text-white"} value={coursename} onChange={this.LeaderChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridMarks">
                                <Form.Label>Marks</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="emailId" placeholder="Enter Marks" className={"bg-dark text-white"} value={marks} onChange={this.LeaderChange} />
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
export default Leaderboard;