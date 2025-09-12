import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function Form(){
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [error,setError]=useState({
        email :"",
        password :""
    });
    let emailPattern=/^[a-zA-Z0-9._]+@[a-zA-z0-9._]+\.[a-zA-Z]{2,}$/;
    function handleClick(){
        let newError = {
            email: "",
            password: ""
        };
        if(email.trim() === ""){
            newError.email ="Please Enter Email ID";
        }else if(!emailPattern.test(email)){
            newError.email ="Please Enter Valid Email ID";
        }

        if(password.trim() === ""){
            newError.password="Please Enter Password";
        }else if(password.length<8){
            newError.password="Please Enter Min 8 letters";
        }

        setError(newError);

        if(newError.email === "" && newError.password ===""){
            console.log("Email :",email);
            console.log("Password :",password);
            setEmail("");
            setPassword("");
        }
    }
    return(
        <>  
            <div className="border w-25 mt-5 m-auto p-3">
                <h1 className="text-primary text-center">Login Form</h1>
                <div className="mt-3">
                    <label>Username</label>
                    <input type="email" className="form-control" value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                    {error && <span className='text-danger'>{error.email}</span>}
                </div>
                <div className="mt-3">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}/>
                    {error && <span className='text-danger'>{error.password}</span>}
                </div>
                <div className="mt-3">
                    <input type="submit" className="btn btn-primary w-100"
                    onClick={handleClick}/>
                </div>
            </div>            
        </>
    )
}

export default Form;