import React from 'react';
import axios from 'axios';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.ForgetChange = this.ForgetChange.bind(this);
        this.submitForget = this.submitForget.bind(this);
    }
    initialState = {
        userId:'',phoneNo:'',password:''

    };
    resetForget=()=>{
        this.setState(()=>this.initialState);
    }
    submitForget = event => {
        // alert('CourseId:' + this.state.courseId + ',CourseName:' + this.state.courseName + ',courseDuration:' + this.state.courseDuration + ',Instructor:' + this.state.instructor + ',Fee:' + this.state.fee + ',InstructorId:' + this.state.instructorId + ',Capacity:' + this.state.capacity);
        event.preventDefault();
        const forget = {
            
            userId:this.state.userId,
            phoneNo:this.state.phoneNo,
            password:this.state.password
        };

        axios.put("http://localhost:9090/forgetPass",forget)
        .then(response=>{
            if(response.data != null){
                this.setState(this.initialState);
                 alert(response.data);
                return this.props.history.push("/Login");
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

    ForgetChange =event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const { userId,phoneNo,password } = this.state;
        return (
            <Card className="border border-dark bg-dark text-white text-center">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Forget Password</Card.Header>

                <Form onReset={this.resetForget} onSubmit={this.submitForget} id="ForgetFormId" style={{ width: "30rem",margin:"auto",marginBottom:"50px"}}>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridUserId">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="userId" placeholder="Enter user Id" className={"bg-dark text-white"} value={userId} onChange={this.ForgetChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPhoneNo">
                                <Form.Label>PhoneNo</Form.Label>
                                <Form.Control type="text" required autoComplete="off" name="phoneNo" placeholder="Enter Your Phone No" className={"bg-dark text-white"} value={phoneNo} onChange={this.ForgetChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridNewPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control required autoComplete="off" type="text" name="password" placeholder="Enter New Password" className={"bg-dark text-white"} value={password} onChange={this.ForgetChange} />
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
export default ForgetPassword;