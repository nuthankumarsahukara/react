import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateStudent(){
    const navigate =useNavigate();
    const {std_id} =useParams();
    const [formData,setFormData] =useState({
        std_name : "",
        std_father_name : "",
        std_mother_name : "",
        std_dob :"",
        std_course :"",
        std_address :"",
        std_phone :""
    });
    const [message, setMessage] = useState('');

    useEffect(()=>{
        if(std_id){
            axios.get(`http://localhost:8086/student/displayStudent/${std_id}`)
            .then((response) => setFormData(response.data))
            .catch((error) => console.error ("Error fetching employee details:", error));        
        }
    },[std_id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            await axios.put(`http://localhost:8086/student/updateStudent/${std_id}`,formData);
            setMessage('Student updated successfully!');
            setTimeout(() => {
                navigate('/view');
            }, 2000);
        }catch(error){
            console.error("Error :"+error);
            setMessage('Failed to update student. Please try again.');
        }
    }
    
    return(
        <>
            <div className="container text-center mt-3 mb-3" >
                <form onSubmit={handleSubmit} className="form text-center w-50 mt-3 p-5 m-auto border border-dark rounded t-center">
                    <h2>Update Student</h2>
                    {message && <p className="alert alert-info">{message}</p>}
                    <input type="text" placeholder="Student Name" name="std_name" value={formData.std_name} onChange={handleInputChange} className="form-control p-2 rounded-pill"/><br/>
                    <input type="text" placeholder="Student Father Name" name="std_father_name" value={formData.std_father_name} onChange={handleInputChange} className="form-control p-2 rounded-pill"/><br/>
                    <input type="text" placeholder="Student Mother Name" name="std_mother_name" value={formData.std_mother_name} onChange={handleInputChange} className="form-control p-2 rounded-pill"/><br/>
                    <input type="date" placeholder="Student DOB" name="std_dob" value={formData.std_dob} onChange={handleInputChange} className="form-control p-2 rounded-pill"/><br/>
                    <input type="text" placeholder="Student Course" name="std_course" value={formData.std_course} onChange={handleInputChange} className="form-control p-2 rounded-pill"/><br/>
                    <input type="text" placeholder="Student Address" name="std_address" value={formData.std_address} onChange={handleInputChange} className="form-control p-2 rounded-pill"/><br/>
                    <input type="text" placeholder="Student Phone Number" name="std_phone" value={formData.std_phone} onChange={handleInputChange} className="form-control p-2 rounded-pill"/><br/>
                    <input type="submit" className="btn btn-primary"/>
                </form>
            </div>
        </>
    )
}

export default UpdateStudent;
