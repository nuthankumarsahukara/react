import { MyContext } from "./App";
import { useContext } from "react";

function Product(){
    let data=useContext(MyContext);
    return(
        <>
            <h1>Welcome to Product Page</h1>
            <h1>Product Id  :{data.product_id}</h1>
            <h1>Product Name  :{data.product_name}</h1>
            <h1>Product Price  :{data.product_price}</h1>
            <h1>Product Rating  :{data.product_rating}</h1>
        </>
    )
}

export default Product;