import { Link, Outlet } from "react-router-dom";
function Contact(){
    return(
        <>
            <h1>Welcome to Contact Component</h1>
            <Link to="profile">Profile Page</Link>
            <Link to="setting">Setting Page</Link>
            <Outlet/>
        </>
    )
}

export default Contact;