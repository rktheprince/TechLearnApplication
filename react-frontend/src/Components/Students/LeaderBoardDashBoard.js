import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ButtonGroup,Button, Card, Table } from 'react-bootstrap';
import { faEdit, faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import {axios} from 'axios';
class LeaderBoardDashboard extends React.Component { 
    constructor(props)
    {
        super(props);
        this.state={
            leaderBoard:[]
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
    //Get All The Courses
    componentDidMount() {

        fetch('http://localhost:9090/viewLeaderboard')
        
        .then(response => response.json())
        
        .then(data => this.setState({ leaderBoard:data }));
        
        }
        //Course Delete (Incomplete)
        // deleteLeaderBoard = (userid) => {
        //     axios.delete("http://localhost:9090/deleteCourse"+courseId)
        //     .then(response => {
        //         if(response.data != null)
        //         {
        //             alert("Book Deleted Successfully");
        //         }
        //     });
        // };
    render() {
        return (
            <Card className="border border-dark bg-dark text-white text-center">
                <Card.Header > <FontAwesomeIcon icon={faList} /> LeaderBoard</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark" style={{height:"40vh"}}>
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>UserName</th>
                                <th>CourseName</th>
                                <th>Marks</th>
                                <th>Certification</th>
                                <th>Grading</th>                      
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.leaderBoard.length===0 ?
                            <tr align="center">
                                <td colSpan="7">No one took the test </td>
                            </tr>:
                            this.state.leaderBoard.map((leaderBoard) => (
                                    <tr>
                                        <td>
                                            {leaderBoard.userid}
                                        </td>
                                        <td>{leaderBoard.username}</td>
                                        <td>{leaderBoard.coursename}</td>
                                        <td>{leaderBoard.marks}</td>
                                        <td>{leaderBoard.certification}</td>
                                        <td>{leaderBoard.grading}</td>                                       
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
export default LeaderBoardDashboard;