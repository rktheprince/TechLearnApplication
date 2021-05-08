import React from 'react';
import axios from 'axios';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
class UpdatePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.PasswordChange = this.PasswordChange.bind(this);
        this.submitPassword = this.submitPassword.bind(this);
    }
    initialState = {
        userId:'',password:'',oldPass:''

    };
    resetPassword=()=>{
        this.setState(()=>this.initialState);
    }
    submitPassword = event => {
        // alert('CourseId:' + this.state.courseId + ',CourseName:' + this.state.courseName + ',courseDuration:' + this.state.courseDuration + ',Instructor:' + this.state.instructor + ',Fee:' + this.state.fee + ',InstructorId:' + this.state.instructorId + ',Capacity:' + this.state.capacity);
        event.preventDefault();
        const password = {
            
            userId:this.state.userId,
            password:this.state.password,
            oldPass:this.state.oldPass
        };

        axios.put("http://localhost:9090/updatePass",password)
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

    PasswordChange =event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const { userId,password,oldPass } = this.state;
        return (
            <Card className="border border-dark bg-dark text-white text-center alignItems-center">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} />Update Password</Card.Header>

                <Form onReset={this.resetPassword} onSubmit={this.submitPassword} id="PasswordFormId" style={{ width: "30rem" ,margin:"auto",marginBottom:"54px",height:"40vh"}}>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridUserId">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="userId" placeholder="Enter user Id" className={"bg-dark text-white"} value={userId} onChange={this.PasswordChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="password" placeholder="Enter new password" className={"bg-dark text-white"} value={password} onChange={this.PasswordChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridOldPassword">
                                <Form.Label>Current Password</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="oldPass" placeholder="Enter Current password" className={"bg-dark text-white"} value={oldPass} onChange={this.PasswordChange} />
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
export default UpdatePassword;