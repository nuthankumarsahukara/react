function OrderList({title,image,rating,price}){
    return(
        <>
            <div className="card">
                <img src={image}/>
                <h4>{title}</h4>
                <p>Price: ${price}</p>
                <p>Rating : {rating.rate}</p>
            </div>
        </>
    )
}

export default OrderList;