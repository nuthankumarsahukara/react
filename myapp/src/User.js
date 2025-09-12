import { useParams, useLocation } from 'react-router-dom';
function User(){
    const { id ,name } = useParams();
    const location = useLocation(); 
    const queryParams = new URLSearchParams(location.search);
    const Address = queryParams.get('Address');
    const pin = queryParams.get('pin');
    return(
        <>
        <h1>User Id :{id}</h1>
        <h1>User Name :{name}</h1>
        <h1>Address :{Address}</h1>
        <h1>Pin :{pin}</h1>
        </>
    )
}

export default User;



