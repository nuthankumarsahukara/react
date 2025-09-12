function Keys(){
    const items=[
        {
            id:101,
            name:"Nuthan",
            age:25
        },
        {
            id:102,
            name:"Vinod",
            age:32
        },
        {
            id:103,
            name:"Ganesh",
            age:21
        }
    ]
    return(
        <>
        {
            items.map((l)=>
                <ul key={l.id}>
                    <li>Id :{l.id}</li>
                    <li >Name :{l.name}</li>
                    <li>Age :{l.age}</li>
                </ul>
            )
        }
        </>
    )
}

export default Keys;