import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Button, Card, Table, InputGroup } from 'react-bootstrap';
import {faList, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import {axios} from 'axios';
class Course extends React.Component { 
    constructor(props)
    {
        super(props);
        this.state={
            course:[],
            current:1,
            next:5
        };
    }

    prevPage=()=>{
        if(this.state.current>1){
            this.setState({
                current:this.state.current-1
            });
        }
    };

    
    nextPage=()=>{
        if(this.state.current<= Math.ceil(this.state.course.length/this.state.next)){
            this.setState({
                current:this.state.current+1
            });
        }
    };
    // componentDidMount()
    // {
    //     axios.get("http://localhost:9090/allCourses")
    //     .then(response=> response.data)
    //     .then((data)=>{
    //         this.setState({course:data});
    //     });
    // }
    //Get All The Courses
    componentDidMount() {

        fetch('http://localhost:9090/allCourses')
        
        .then(response => response.json())
        
        .then(data => this.setState({ course:data }));
        
        }
        //Course Delete (Incomplete)
        deleteCourse = (courseId) => {
            axios.delete("http://localhost:9090/deleteCourse/"+courseId)
            .then(response => {
                if(response.data != null)
                {
                    alert(response.data);
                    this.setState({
                        courses:this.state.courses.filter(course=>course.courseId != courseId)
                    });
                }
            });
        };
    render() {
        const {course,current,next}=this.state;
        const lastIndex=current*next;
        const firstIndex=lastIndex-next;
        const currentUser=course.slice(firstIndex,lastIndex);
        const totalPages=course.length/next;
        return (
            <Card className="border border-dark bg-dark text-white text-center">
                <Card.Header > <FontAwesomeIcon icon={faList} /> Courses</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                            <tr>
                                <th>Course Id</th>
                                <th>Course Name</th>
                                <th>Course Duration</th>
                                <th>Instructor</th>
                                <th>Fee</th>
                                <th>Capacity</th>
                                <th>Instructor Id</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        course.length===0 ?
                            <tr align="center">
                                <td colSpan="7">No Course Available </td>
                            </tr>:
                            currentUser.map((course) => (
                                    <tr>
                                        <td>
                                            {course.courseId}
                                        </td>
                                        <td>{course.courseName}</td>
                                        <td>{course.courseDuration}</td>
                                        <td>{course.instructor}</td>
                                        <td>{course.fees}</td>
                                        <td>{course.capacity}</td>
                                        <td>{course.instructorId}</td>
                                    </tr>
                            ))
                            }
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer>
                    <div style={{"float":"left"}}>
                            Showing Page {current}
                    </div>
                    <div style={{"float":"right"}}>
                            <InputGroup size="sm">
                                <InputGroup.Prepend>
                                <Button type="button" variant="outline-info" disabled={current===1?true:false} onClick={this.prevPage}>
                                <FontAwesomeIcon icon={faStepBackward} />Prev
                                </Button>
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                <Button type="button" variant="outline-info" disabled={current===totalPages?true:false} onClick={this.nextPage}>
                                <FontAwesomeIcon icon={faStepForward} /> Next
                                </Button>
                                </InputGroup.Append>
                            </InputGroup>
                    </div>
                </Card.Footer>
            </Card>
        );
    }
}
export default Course;