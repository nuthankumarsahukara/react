import { useEffect, useState } from "react";
import OrderList from "./OrderList";

function Order(){
    let [product,productList] =useState("");

    useEffect(()=>{
        getProducts();
    },[])

    async function getProducts(){
        let res=await fetch('https://fakestoreapi.com/products')
        let updateproducts=await res.json();
        productList(updateproducts);
        console.log(updateproducts);
    }

    if(product.length === 0){
        return(<h1>Fetching the Data .......</h1>);
    }
    
    return(
        <>
            <div className="product-list">
                {
                    product.map((p)=><OrderList {...p} key={p.id}/>)
                }
            </div>
        </>
    );
}

export default Order;