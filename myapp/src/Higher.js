function AuthCheck(Component){
    let authenticated=false;
    return(props)=>{
        if(authenticated){
            return <Component {...props}/>
        }
        else{
            return <Login/>
        }
    }
}

function Login(){
    return(
        <>
            <h1>This is Login Component</h1>
        </>
    )
}

function User(props){
    return(
        <>
            <h1>This is User Component</h1>
            <h1>Hello {props.name}</h1>
        </>
    )
}

let AuthChecked=AuthCheck(User);

function App(){
    return(
        <>
            <AuthChecked username={"Datapro"}/>
        </>
    )
}

export default App;