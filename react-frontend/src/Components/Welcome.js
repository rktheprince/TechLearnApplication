import React from 'react';
import Video from './Motivational.mp4';
import {Jumbotron} from 'react-bootstrap';
class Welcome extends React.Component{
    render()
    {
        return(
            <Jumbotron className="bg-transparent text-white text-center" style={{height:"50vh"}}>
            <h1 className="text-bold" style={{top:"1px",position:"absolute",left:"350px"}}><emp>Welcome To TechLearn</emp></h1>
            <blockquote className="blackquote mb-0">
                <p style={{top:"50px",position:"absolute",left:"300px",fontWeight:"600"}}>
                “Live as if you were to die tomorrow. Learn as if you were to live forever”
                </p>
                <footer className="blockquote-footer text-white" style={{top:"75px",position:"absolute",left:"720px",fontWeight:"600"}}>
                  Mahatma Gandhi
                </footer>
            </blockquote>
            <div>
      <video autoPlay muted loop
      style={{
        position:"absolute",
        width:"100vw",
        height:"105vh",
        left:"50%",
        top:"50%",
        objectFit:"cover",
        transform:"translate(-50%,-50%)",
        zIndex:"-1"

      }}
      
      >
        <source src={Video} type="video/mp4">
        </source>
      </video>
      </div>
          </Jumbotron>
          
        );
    }
}
export default Welcome;