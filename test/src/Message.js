
const Message = (Fun) =>{
    return()=>(
        <>
            <h1>Welcome to Message</h1>
            <h1><Fun/></h1>
        </>
    )
}

const Fun = () => <p>Hai from function</p>

export default Message(Fun);