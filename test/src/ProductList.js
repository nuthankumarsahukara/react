import { useEffect, useState } from "react";

function useProductList(url){
    let[product,updateProduct]=useState([]);

    async function productData(){
        const data=await fetch(url);
        const apiRest=await data.json();
        console.log(apiRest);
        updateProduct(apiRest);
    }

    useEffect(()=>{
        async function productData(){
            const data=await fetch(url);
            const apiRest=await data.json();
            console.log(apiRest);
            updateProduct(apiRest);
        }

        productData()
    },[url]);

    return product;
}

export default useProductList;