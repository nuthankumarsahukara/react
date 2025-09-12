function ChildProps(props){
    let handleClick=()=>{
        props.data([
            { name : "Nuthan", age: 25},
            { name : "Vinod", age: 35},
            { name : "Sai", age: 23},
            { name : "Kalyan", age: 35},
            { name : "Rahul", age: 27},
        ])
    }
    return(
        <>
            <button onClick={handleClick}>Send to Child</button>
        </>
    )
}

export default ChildProps;