import React from 'react';
import ContactPic from './ContactPic.jpg';
import {Row} from 'react-bootstrap';
class Contact extends React.Component {
     render(){
    return (
        <div style={{ width: "40%" }}>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Query</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit">Send Message</button>
            
        </div>
    );
     }
}
export function ContactUsFinal()
{
    return(
        <div>
           <Row>
           <Contact/>
            <img src={ContactPic} style={{ height: "60vh", position: "relative", left: "45%", bottom: "330px" }}></img>
           </Row>
        </div>
    );
}