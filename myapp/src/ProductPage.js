import { useContext } from "react";
import { MyContext } from "./App";

function ProductPage(){
    let data=useContext(MyContext);
    return (
        <>
            <h1>This is Product page Component</h1>
            <p>Name :{data.name}</p>
            <p>Age :{data.age}</p>
            <p>Place :{data.place}</p>
        </>
    )
}

export default ProductPage;