import { useDispatch, useSelector } from "react-redux";

function App(){
    let dispatch=useDispatch();
    let data=useSelector((state)=>state.userData);

    async function fetchData(dispatch){
            let res= await fetch('https://jsonplaceholder.typicode.com/users');
            let data=await res.json();
            console.log(data);
            dispatch({type:"add",payload:data})
        }        
    return(
        <>
            <div>
                {data.length>0 ? (
                    data.map((user) => (
                    <div key={user.id} style={{ marginBottom: '20px' }}>
                        <h1>Id : {user.id}</h1> 
                        <h1>Name : {user.name}</h1>
                        <h1>Mobile : {user.phone}</h1>
                        <h1>City :{user.address.city}</h1>
                        <h1>lat :{user.address.geo.lat}</h1>
                        <h1>lng :{user.address.geo.lng}</h1>
                        <hr/>
                    </div>                    
                ))): (
                <p>No users to display.</p>
            )}
            </div>
            <button onClick={()=>{dispatch(fetchData)}}>GET</button>
        </>
    )
}

export default App;