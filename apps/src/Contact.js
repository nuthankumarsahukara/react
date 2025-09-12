import useGetAPICall from "./GetAPICall";

function Contact(){
    let product=useGetAPICall('https://fakestoreapi.com/products/10')
    return(
        <>
            <h1>ID :{product.id}</h1>
            <h1>Title :{product.title}</h1>
            <h1>Price :{product.price}</h1>
            <img src={product.image} height={"250px"} width={"250px"} alt="data"/>
        </>
    )
}

export default Contact;