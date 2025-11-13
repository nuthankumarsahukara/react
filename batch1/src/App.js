import { useEffect, useState } from "react";
import axios from "axios";

function App(){
  
  let[output,setOutput]=useState([]);

  useEffect( () =>{
    async function getProducts() {
        let res=await axios.get('https://fakestoreapi.com/products');
        setOutput(res.data);
    }
    getProducts();  
  },[]);
  
  return(
    <>
        <h1>By Using Axios Method</h1>
        <ul>
          {output.map((p)=>(
            <>
              <li key={p.id}>Name :{p.title}</li>
              <li>Price :${p.price}</li>
              <hr/>
            </>
          ))}
        </ul>
    </>
  )
}

export default App;