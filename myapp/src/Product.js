import {useEffect, useState } from "react"
import ProductCard from "./ProductCard";

function Product(){
    let [products,updateproducts]=useState("");
    useEffect(
        ()=>{ allDetails() },[]   
    );

    async function allDetails(){
        let res= await fetch('https://fakestoreapi.com/products');
        let productList=await res.json();
        updateproducts(productList);
        console.log(productList);
    }

    if(products.length === 0){
        return(<h1>Fetching the data.....</h1>);    
    }  

    return(
        <>
        <div className="product-list">
        {products.map((p)=>
        <ProductCard {...p} key={p.id}  />
        )}
        </div>
        </>
    )
}

export default Product;