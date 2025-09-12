import {Link,useNavigate} from 'react-router-dom';

function Photo(){
    let navigate=useNavigate();
    return(
        <>
            <h1>Welcome to Photo Page</h1>
            <Link to="/about">About Page </Link> <br/><br/>
            <button onClick={
                ()=>navigate("/about/{id}")
            }>Goto About Page</button>
        </>
    )
}

export default Photo;