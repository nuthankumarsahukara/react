function Product({id,name,price,dp}){
    return(
        <>
            <h1>Product ID :{id}</h1>
            <h1>Product Name :{name}</h1>
            <h1>Product Price:{price}</h1>
            <h1>Product After Discount Price :{dp}</h1>
        </>
    )
}

export default Product;