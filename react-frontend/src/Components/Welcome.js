import React from 'react';
import {Jumbotron} from 'react-bootstrap';
class Welcome extends React.Component{
    render()
    {
        return(
            <Jumbotron className="bg-dark text-white text-center">
            <h1>Welcome To TechLearn</h1>
            <blockquote className="blackquote mb-0">
                <p>
                “Live as if you were to die tomorrow. Learn as if you were to live forever”
                </p>
                <footer className="blockquote-footer text-white">
                  Mahatma Gandhi
                </footer>
            </blockquote>
          </Jumbotron>
        );
    }
}
export default Welcome;