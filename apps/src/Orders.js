function Orders({image,title,price,rating}){
    return(
        <>
            <div className="card">
                <img src={image} alt="product_image"/>
                <h4>{title}</h4>
                <p>Price : ${price}</p>
                <p>Rating : {rating.rate}</p>
            </div>
        </>
    )
}

export default Orders;