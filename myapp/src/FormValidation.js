import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function FormValidation(){
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let[error,setError]=useState({
        email : "",
        password :""
    });

    function handleSubmit(e){
        e.preventDefault();
        let emailPattern=/^[a-zA-z0-9,_-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,}$/;
        if(email.trim() === ""){
            setError((error)=>({...error,email:"Enter the Email Id"}));
        }else if(!emailPattern.test(email)){
            setError((error)=>({...error,email:"Please enter the valid Email Id"}));
        }else{
            setError((error)=>({...error,email:""}));
        }

        if(password.trim() === ""){
            setError((error)=>({...error,password:"Enter the Password"}));
        }else if(password.trim().length<8){
            setError((error)=>({...error,password:"Password is min 8 Characters"}));
        }else{
            setError((error)=>({...error,password:""}))
        }

        if (error.email === "" && error.password === "") {
            console.log("Form submitted", { email, password });
            // Optional: reset form
            // setEmail("");
            // setPassword("");
        }
    }
    
    return(
        <>
            <div className='border w-25 mt-5 m-auto p-3'>
                <h1 className='text-primary text-center'>Login Form</h1>
                <form>
                    <div className='mt-3'>
                    <label>UserName</label> 
                    <input type="email" className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    {error.email&&<span className="text-danger">{error.email}</span>}
                    </div>
                    <div className='mt-3'>
                    <label>Password</label>
                    <input type="password" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    {error.password&&<span className="text-danger">{error.password}</span>}
                    </div>
                    <div className='mt-3'>
                        <input type="submit" className='btn btn-primary w-100' 
                        onClick={ handleSubmit}/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormValidation;