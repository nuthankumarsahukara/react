import { useDispatch,useSelector } from "react-redux";

function App(){
  const dispatch=useDispatch();
  let data=useSelector((state)=> state.userData);
  console.log(data);

  async function fetchData(dispatch,getState){
      const res=await fetch('https://jsonplaceholder.typicode.com/users');
      const data=await res.json();
      dispatch({type:"add",payload:data});
  }

  return(
    <>
      <h1>Welcome To Redux Thunk</h1>
      {data.length >0 ? (
        data.map((user)=>(
              <div key={user.id}>
                  <h1>ID :{user.id}</h1>
                  <h1>Name :{user.name}</h1>
                  <h1>Street :{user.address.street}</h1>
                  <h1>City :{user.address.city}</h1>
                  <h1>Lat :{user.address.geo.lat}</h1>
                  <h1>-----------------------------</h1>
              </div>
        ))
      ): (<p>No users to display.</p>) }
      
      <button onClick={()=>{dispatch(fetchData)}}>Get Details</button>
    </>
  )
}

export default App;