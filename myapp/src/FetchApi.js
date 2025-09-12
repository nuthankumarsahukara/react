import { useEffect, useState } from "react"

function FetchApi(){
    useEffect(
        ()=>{
            getProducts();
        },[]
    )
    let [output,setOutput]=useState([]);
    async function getProducts(){
        let res=await fetch('https://fakestoreapi.com/products');
        let data=await res.json();
        setOutput(data);
    }
    return(
        <>
        <div>
        <h2>Products</h2>
        <ul>
            {output.map(product => <li key={product.id}>{product.title}</li>)}
        </ul>
        </div>
        </>
    )
}

export default FetchApi;