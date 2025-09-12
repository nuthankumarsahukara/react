import { useDispatch, useSelector } from "react-redux";

function App(){
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.userData);
    async function handleData(dispatch,getState){
        let res= await fetch('https://jsonplaceholder.typicode.com/users');
        let data=await res.json();
        dispatch({type:"add",payload:data});
        console.log(getState());
    }
    return(
        <>
            <button className="btn btn-primary m-5"
            onClick={()=>{dispatch(handleData)}}
            >Get Details</button>
            {data.length>0 ? (
                data.map((user)=>(
                    <div key={user.id} style={{margin:'25px'}}>
                        <h1>Id  : {user.id}</h1>
                        <h1>Name : {user.name}</h1>
                        <h1>Email : {user.email}</h1>
                        <h1>Address :{user.address?.street}</h1>
                    </div>
                ))    
            ): (
                <p>No users to display.</p>
            )
            }            
        </>
    )
}

export default App;