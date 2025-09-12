function ProductCard({title,price,image,rating}){
    return(
        <>
            <div className="card">
                <img src={image} alt="image"/>
                <h4>{title}</h4>
                <p>Price : ${price}</p>
                <p>Rating :{rating.rate}</p>
            </div>
        </>
    )
}

export default ProductCard;