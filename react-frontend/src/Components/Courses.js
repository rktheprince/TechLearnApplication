import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ButtonGroup,Button, Card, Table } from 'react-bootstrap';
import { faEdit, faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import {axios} from 'axios';
class Course extends React.Component { 
    constructor(props)
    {
        super(props);
        this.state={
            course:[]
        };
    }
    // componentDidMount()
    // {
    //     axios.get("http://localhost:9090/allCourses")
    //     .then(response=> response.data)
    //     .then((data)=>{
    //         this.setState({course:data});
    //     });
    // }

    componentDidMount() {

        fetch('http://localhost:9090/allCourses')
        
        .then(response => response.json())
        
        .then(data => this.setState({ course:data }));
        
        }
        //Course Delete (Incomplete)
        deleteCourse = (courseId) => {
            axios.delete("http://localhost:9090/deleteCourse"+courseId)
            .then(response => {
                if(response.data != null)
                {
                    alert("Book Deleted Successfully");
                }
            });
        };
    render() {
        return (
            <Card className="border border-dark bg-dark text-white text-center">
                <Card.Header > <FontAwesomeIcon icon={faList} /> Courses</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                            <tr>
                                <th>courseId</th>
                                <th>courseName</th>
                                <th>courseDuration</th>
                                <th>instructor</th>
                                <th>fee</th>
                                <th>capacity</th>
                                <th>instructorId</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.course.length===0 ?
                            <tr align="center">
                                <td colSpan="6">No Course Available </td>
                            </tr>:
                            this.state.course.map((course) => (
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
                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit} /></Button>
                                                <Button size="sm" variant="outline-danger" onClick={this.deleteCourse.bind(this,course.courseId)}><FontAwesomeIcon icon={faTrash} /></Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                            ))
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}
export default Course;