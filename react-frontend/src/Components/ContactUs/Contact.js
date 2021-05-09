import React from 'react';
import ContactPic from './ContactPic.jpg';
import emailjs from 'emailjs-com';
import {Row} from 'react-bootstrap';
class Contact extends React.Component {

    sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_kd7nuds', e.target, 'user_btDFJIdfNSInxkuAHWNaO')//serviveId,TemplateId,e.target,UserId
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

     render(){
    return (
        <div style={{ width: "40%", border: "5px solid white", padding: "20px", borderRadius: "25px"}}>
            <h1 style={{color: "white"}}>Contact Us</h1>
            <form onSubmit={this.sendEmail}>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" className="text-white font-weight-bold">Name</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" name="name" placeholder="Name"/>
                <p style={{color: "white"}}>We will never share your details with anyone</p>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" className="text-white font-weight-bold">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" placeholder="Email Address"/>
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" className="text-white font-weight-bold">Query</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
            </div>
            <input className="btn btn-primary" value="Send Message" type="submit"/>
            </form>
        </div>
    );
     }
}
export function ContactUsFinal()
{
    return(
        <div style={{height:"91vh"}}>
           <Row>
           <Contact style={{border: "5px solid white"}}/>
            <img src={ContactPic} style={{ height: "60vh",width:"45vw" ,position: "relative", left: "43%", bottom: "450px",border:"5px solid white"}}></img>
           </Row>
        </div>
    );
}