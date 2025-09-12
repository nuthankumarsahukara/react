import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef, useState} from 'react';
function FormHanding(){
    let[email,setEmail]=useState("");
    //let[password,setPassword]=useState("");

    let pwd=useRef();
    return(
        <>
            <div className='border w-25 mt-5 m-auto p-3'>
                <h1 className='text-primary text-center'>Login Form</h1>
                <form>
                    <div className='mt-3'>
                    <label>UserName</label> 
                    <input type="email" className='form-control'value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className='mt-3'>
                    <label>Password</label>
                    <input type="password" className='form-control' ref={pwd}/>
                    </div>
                    <div className='mt-3'>
                        <input type="submit" className='btn btn-primary w-100' onClick={
                            (e)=>{
                                e.preventDefault();
                                console.log("Email :",email);
                                console.log("Password :",pwd.current.value);
                            }
                        }/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormHanding;