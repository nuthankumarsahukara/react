import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AddStudent(){
    const [message,setMessage]=useState('');
    const navigate = useNavigate();
    const [student,setStudent]=useState({
        std_id : "",
        std_name : "",
        std_father_name : "",
        std_mother_name : "",
        std_dob :"",
        std_course :"",
        std_address :"",
        std_phone :""
    });

    const newStudent = async(e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8086/student/addStudent",student);
            setMessage("Student Added  successfully!");
            setStudent({
                std_name : "",
                std_father_name : "",
                std_mother_name : "",
                std_dob :"",
                std_course :"",
                std_address :"",
                std_phone :""
            });
            setTimeout(()=>{
                navigate('/view');
            },2000)
        }catch(error){
            console.error("Error adding Student:", error);
            setMessage('Failed to add Student. Please try again.');
        }    
    }

    const {std_name,std_father_name,std_mother_name,std_dob,std_course,std_address,std_phone}=student;

    const changedData = (s) =>{
        setStudent({...student,[s.target.name] : s.target.value});
    }

    return(
        <>
            <div className="container text-center mt-3 mb-3" >
                <form onSubmit={newStudent} className="form text-center w-50 mt-3 p-5 m-auto border border-dark rounded t-center">
                    <h2>Add Student</h2>
                    {message && <p className="alert alert-info">{message}</p>}
                    <input type="text" placeholder="Student Name" name="std_name" value={std_name} onChange={changedData} className="form-control p-2 rounded-pill"/><br/>
                    <input type="text" placeholder="Student Father Name" name="std_father_name" value={std_father_name} onChange={changedData} className="form-control p-2 rounded-pill"/><br/>
                    <input type="text" placeholder="Student Mother Name" name="std_mother_name" value={std_mother_name} onChange={changedData} className="form-control p-2 rounded-pill"/><br/>
                    <input type="date" placeholder="Student DOB" name="std_dob" value={std_dob} onChange={changedData} className="form-control p-2 rounded-pill"/><br/>
                    <input type="text" placeholder="Student Course" name="std_course" value={std_course} onChange={changedData} className="form-control p-2 rounded-pill"/><br/>
                    <input type="text" placeholder="Student Address" name="std_address" value={std_address} onChange={changedData} className="form-control p-2 rounded-pill"/><br/>
                    <input type="text" placeholder="Student Phone Number" name="std_phone" value={std_phone} onChange={changedData} className="form-control p-2 rounded-pill"/><br/>
                    <input type="submit" className="btn btn-primary"/>
                </form>
            </div>
        </>
    )
}

export default AddStudent;
