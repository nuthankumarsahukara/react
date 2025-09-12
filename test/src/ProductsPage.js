import { useContext } from "react";
import { MyContext } from "./App";

function ProductsPage(){
    let data=useContext(MyContext);
    return(
        <>
            <h1>Welcome to Products Page</h1>
            <h1>Course ID :{data.course_id}</h1>
            <h1>Course Name :{data.course_name}</h1>
            <h1>Course Fee :{data.course_fee}</h1>
            <h1>Course Duration :{data.course_duration}</h1>
        </>
    )
}

export default ProductsPage;