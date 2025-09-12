function List(){
    const items=["Books","Pens","Pencil","Erase"]
    return(
        <ul>
        {
            items.map((l,index)=>
                <li key={index}>{l}</li>
            )
        }
        </ul>
    )
}

export default List;