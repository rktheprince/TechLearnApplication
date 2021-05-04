import React,{useState} from 'react'

const spanStyle = {
    color: 'red'
  };
  const divStyle={
    width: '400px',
    margin: 'auto',
    border: '5px solid pink',
    marginTop:'20px',
    padding: '10px',
  };
export const User = () => {

    const [userReg, setuserReg] = useState({
        user:"",
        email:"",
        pass:"",
        phn:"",
        loc:"",
        gender:"",
        dob:""
    });
    
    const [records, setRecords] = useState([])

    const [error, setError] = useState({
        user:"",
        email:"",
        pass:"",
        phn:"",
        loc:"",
        dob:""
    });

    const handleInput=(event)=>{
        setError("");
        const name=event.target.name;
        const value=event.target.value;

        setuserReg({...userReg,[name]:value});
    }
    const handleReset=(event)=>{
        event.preventDefault();
        setuserReg({user:"",email:"",pass:"",phn:"",loc:"",gender:"",dob:""});
        setError({user:"",email:"",pass:"",phn:"",loc:"",dob:""});
    }
    const handleSubmit=(event)=>{
        event.preventDefault();

        let userVal=/^[A-Za-z]+$/g;
        let mobVal=/^[6-9]{1}[0-9]{9}$/g
        
        if(userReg.user==="")
            setError({...error,name:"Fill userName"});
        else if(!userReg.user.trim().match(userVal))
            setError({...error,name:"Invalid userName"});
        else if(userReg.email==="")
            setError({...error,email:"Enter your email id"});    
        else if(userReg.pass==="")
            setError({...error,pass:"Fill Password"});
        else if(userReg.pass.length<6)
            setError({...error,pass:"Length must be greater than 6"});
        else if(userReg.pass.search(/[0-9]+/)==-1||userReg.pass.search(/[A-Z]+/)==-1||(userReg.pass.search(/[a-z]+/)==-1))
            setError({...error,pass:"Invalid Password"});
        else if(userReg.phn==="")
            setError({...error,phn:"Fill Phone"});
        else if(!userReg.phn.match(mobVal))  
            setError({...error,phn:"Invalid mobile number"});
        else if(userReg.loc==="")         
            setError({...error,loc:"Choose your city"}); 
        else if(userReg.dob==="")
            setError({...error,dob:"Choose your dob"});    
        else{        
        const newRecord={...userReg};
        setRecords([...records,newRecord]);
        alert("Your form has been submitted");
        setuserReg({user:"",email:"",pass:"",phn:"",loc:"",gender:"",dob:""});
        }

       
    }
    return (
        <div className="text-center bg-light"style={divStyle}>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <h4 className="">SignUp</h4>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="user" id="user" value={userReg.user} onChange={handleInput} autoComplete="off" className="form-control"/>  
                    <span style={spanStyle}>{error.name}</span>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" id="email" value={userReg.email} onChange={handleInput} autoComplete="off" className="form-control"/>  
                    <span style={spanStyle}>{error.email}</span>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="pass" id="pass" value={userReg.pass} onChange={handleInput} autoComplete="off" className="form-control"/>  
                    <span style={spanStyle}>{error.pass}</span>
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="number" name="phn" id="phn" value={userReg.phn} onChange={handleInput} autoComplete="off" className="form-control"/>  
                    <span style={spanStyle}>{error.phn}</span>
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <select name="loc" id="loc" value={userReg.loc} onChange={handleInput} className="form-control">
                        <option>Choose your city</option>
                        <option>Kolkata</option>
                        <option>Bangalore</option>
                        <option>Mumbai</option>
                        <option>Chennai</option>
                    </select>
                    <span style={spanStyle}>{error.loc}</span>
                </div>
                {/* <div className="form-group">
                    <div className="form-control">
                        <label>Gender</label>
                        <input type="radio" name="gender" id="male" value={userReg.gender} onChange={handleInput}/>male
                        <input type="radio" name="gender" id="female" value={userReg.gender} onChange={handleInput}/>female
                    </div>  
                </div> */}
                <div className="form-group">
                    <label>Date of birth</label>
                    <input type="date" id="dob" name="dob" value={userReg.dob} onChange={handleInput} className="form-control"/>
                    <span style={spanStyle}>{error.dob}</span>
                </div>
                <div className="form-group text-center">
                    <input type="submit" value="Register" className="btn btn-success"/>      
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="reset" value="Reset" className="btn btn-danger"/>          
                </div>
            </form>

            <div>
                {
                    records.map((x)=>{
                        return (
                            <div>
                                <p>{x.user}</p>
                                <p>{x.pass}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
