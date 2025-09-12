import { useParams,useLocation } from "react-router-dom";

function User(){

    const {id,name,place} =useParams();
    const location=useLocation();
    const queryParams=new URLSearchParams(location.search);
    const country=queryParams.get('country');
    return(
        <>
            <h1>Id : {id}</h1>
            <h1>Name :{name}</h1>
            <h1>Place :{place}</h1>    
            <h1>Country :{country}</h1>        
        </>
    )
}

export default User;