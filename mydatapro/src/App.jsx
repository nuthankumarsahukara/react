import { useDispatch, useSelector } from "react-redux";

function App(){
    
    const dispatch=useDispatch();
    let data=useSelector((state)=>state);
    console.log(data);

    async function fetchData(dispatch,getState){
        let res=await fetch('https://jsonplaceholder.typicode.com/users/2');
        let data=await res.json();
        dispatch({type:"add",payload:data});
    }

    return(
        <>
          <div>
              <h1>ID :{data.userData?.id}</h1>
              <h1>Name :{data.userData?.name}</h1>
              <h1>Mobile :{data.userData?.phone}</h1>
          </div>
          <button onClick={()=>{dispatch(fetchData)}}>Get Details</button>
        </>
    )
}

export default App;