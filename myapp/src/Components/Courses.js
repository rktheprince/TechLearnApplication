import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Card, Table } from 'react-bootstrap';
import { faList } from '@fortawesome/free-solid-svg-icons';
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
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.course.length===0 ?
                            <tr align="center">
                                <td colSpan="6"> course Available</td>
                            </tr>:
                            this.state.course.map((course) => (
                                    <tr key={course.courseId}>
                                        <td>
                                            {course.courseId}
                                        </td>
                                        <td>{course.courseName}</td>
                                        <td>{course.courseDuration}</td>
                                        <td>{course.fee}</td>
                                        <td>{course.instructor}</td>
                                        <td>{course.capacity}</td>
                                        <td>{course.instructorId}</td>
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