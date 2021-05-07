import React from 'react';
import Taranjeet from './Taranjeet.jpg';
import Mohit from './Mohit.jpeg';
import Soumik from './Soumik.jpeg';
import Piyush from './Piyush.jpeg';
import Rohit from './Rohit.jpeg';
import Sayan from './Sayan.jpeg';
import Divyansh from './Divyansh.jpeg';
import pic from './pic.jpeg';
import {Card} from 'react-bootstrap';
class Author1 extends React.Component{
    render(){
        return (
            <div class="card mb-3" style={{ width: "660px" ,margin:"0px auto"}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={Taranjeet} alt="Taranjeet" style={{height:"25vh",width: "230px" ,margin:"auto"}}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-black">Taranjeet</h5>
                        <p class="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text text-black"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

 class Author2 extends React.Component{
    render()
    {
        return (
            <div class="card mb-3" style={{ width: "660px" ,margin:"0px auto"}}>
            <div class="row g-0">
                <div class="col-md-4" style={{margin:"0px auto"}} >
                    <img src={Mohit} alt="Mohit" style={{height:"25vh",width: "230px" ,margin:"auto"}}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-black">Mohit</h5>
                        <p class="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text text-black"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

class Author3 extends React.Component{
    render()
    {
        return (<div class="card mb-3" style={{ width: "660px" ,margin:"0px auto"}}>
        <div class="row g-0">
            <div class="col-md-4" style={{margin:"0px auto"}} >
                <img src={Soumik} alt="Soumik" style={{height:"25vh",width: "230px" ,margin:"auto"}} />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-black">Soumik</h5>
                    <p class="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text text-black"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
    );
    }
}

class Author4 extends React.Component{
    render()
    {
        return (
            <div class="card mb-3" style={{ width: "660px" ,margin:"0px auto"}}>
            <div class="row g-0">
                <div class="col-md-4" style={{margin:"0px auto"}} >
                    <img src={Piyush} alt="Piyush" style={{height:"25vh",width: "230px" ,margin:"auto"}} />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-black">Piyush</h5>
                        <p class="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text text-black"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

class Author5 extends React.Component{
    render()
    {
        return (
            <div class="card mb-3" style={{ width: "660px" ,margin:"0px auto"}}>
            <div class="row g-0">
                <div class="col-md-4" style={{margin:"0px auto"}} >
                    <img src={Rohit} alt="Rohit" style={{height:"25vh",width: "230px" ,margin:"auto"}}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-black">Rohit</h5>
                        <p class="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text text-black"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
class Author6 extends React.Component{
    render(){
    return (
        <div class="card mb-3" style={{ width: "660px" ,margin:"0px auto"}}>
        <div class="row g-0">
            <div class="col-md-4" style={{margin:"0px auto"}} >
                <img src={Sayan} alt="Sayan" style={{height:"25vh",width: "230px" ,margin:"auto"}}/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-black">Sayan</h5>
                    <p class="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text text-black"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
    );
}
}

class Author7 extends React.Component{
    render()
    {
        return (
            <div class="card mb-3" style={{ width: "660px" ,margin:"0px auto"}}>
            <div class="row g-0">
                <div class="col-md-4" style={{margin:"0px auto"}} >
                    <img src={Divyansh} alt="Divyansh" style={{height:"25vh",width: "230px" ,margin:"auto"}} />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-black">Divyansh</h5>
                        <p class="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text text-black"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export function AboutUsFinal()
{
    return(
        <div className="container" >
            <img src={pic} style={{height: 500, width:1100}} />
            <br/><br/>
            <Card className="border border-dark bg-dark text-black text-center alignItems-center">
            <Author1/>
            <Author2/>
            <Author3/>
            <Author4/>
            <Author5/>
            <Author6/>
            <Author7/>
            </Card>
        </div>
    );
}