import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { useState } from 'react';
function FormHandling(){
    let[name,setName]=useState("");
    let[password,setPassword]=useState("");
    let[error,setError]=useState({
        name :"",
        password:""
    });
    let emailPattern=/^[a-zA-Z0-9.]+@[a-zA-z0-9.]+\.[a-zA-Z]{2,}$/;
    function handleClick(){
        let newError = {
            name: "",
            password: ""
        };
        if(name.trim() === ""){
            newError.name ="Please Enter Email ID";
        }else if(!emailPattern.test(name)){
            newError.name ="Please Enter Valid Email ID";
        }

        if(password.trim() === ""){
            newError.password="Please Enter Password";
        }else if(password.length<8){
            newError.password="Please Enter Min 8 letters";
        }

        setError(newError);

        if(newError.name === "" && newError.password ===""){
            console.log("Username :",name);
            console.log("Password :",password);
            setName("");
            setPassword("");
        }
    }
    return(
        <>
            <div className='border border-dark border-5 rounded m-auto p-4'>
                <h1 className='text-center text-success'>Form Validation Ex</h1>
                <h1 className='text-center text-success'>Login Form</h1>
                <div className='mt-3'>
                    <label className='fs-5 fw-bolder'>Username</label>
                    <input type='text' value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    className='form-control'/>
                    {error && <span className='text-danger'>{error.name}</span>}
                </div>
                <div className='mt-3 fw-bolder'>
                    <label className='fs-5'>Password</label>
                    <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='form-control' />
                    {error && <span className='text-danger'>{error.password}</span>}
                </div>
                <div className='mt-3'>
                    <button className='btn btn-success w-100' onClick={handleClick}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default FormHandling;