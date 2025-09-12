import { Link, useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate();

    let handleClick=() => {
            navigate("/about");
    }
    return(
        <>
            <h1>Welcome to Home</h1>
            <Link to="/about">About</Link>
            <button onClick={handleClick}>Go to About (Programmatically)</button>
        </>
    )
}



export default Home;