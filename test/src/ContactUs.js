import {useParams} from 'react-router-dom';
function ContactUs(){
    const{name,age}=useParams();
    return(
        <>
            <h1>Welcome to Contact Us</h1>
            <p>Name  :{name}</p>
            <p>Age : {age}</p>
        </>
    )
}

export default ContactUs;