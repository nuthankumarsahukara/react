import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ViewStudent(){
    const [student,setStudent]=useState([]);
    const [message,setMessage]=useState('');
    const navigate=useNavigate();

    useEffect(() => {
        fetchStudent(); 
    }, []);

    const fetchStudent = async () =>{
        try{
            axios.get("http://localhost:8086/student/").then((response) => {
            setStudent(response.data);
            })
        }catch(error){
            console.error("There is error in fetch the data");
        }
    }

    const handleDelete = async(std_id) =>{
        try{
            const response = await axios.delete(`http://localhost:8086/student/deleteStudent/${std_id}`);
            console.log("Employee deleted:", response);
            setMessage("Student Deleted successfully!");
            fetchStudent();
        }catch(error){
            console.error(error);
            setMessage("Failed to Delete Student. Please try again.");
        }
    }

    const handleUpdate = (std_id) =>{
        navigate(`/student/updateStudent/${std_id}`);
    }

    return(
        <>
            <div className="container">
                <h1 className="text-center m-3">Student List</h1>
                {message && <p className="alert alert-info text-center">{message}</p>}
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>Student Name</th>
                            <th>Father Name</th>
                            <th>Mother Name</th>
                            <th>Student DOB</th>
                            <th>Student Address</th>
                            <th>Student Course</th>
                            <th>Student Phone Number</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((s)=>(
                            <tr key={s.std_id}>
                                <td>{s.std_id}</td>
                                <td>{s.std_name}</td>
                                <td>{s.std_father_name}</td>
                                <td>{s.std_mother_name}</td>
                                <td>{s.std_dob}</td>
                                <td>{s.std_address}</td>
                                <td>{s.std_course}</td>
                                <td>{s.std_phone}</td>
                                <td><button className="btn btn-warning" onClick={()=>{handleUpdate(s.std_id)}}>Edit</button></td>               
                                <td><button className="btn btn-danger" onClick={()=>{handleDelete(s.std_id)}}>Delete</button></td>
                            </tr>    
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewStudent;
