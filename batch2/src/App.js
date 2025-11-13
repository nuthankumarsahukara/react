function App(){
    let counter=0;
    return(
        <>
            <h1>Count : {counter}</h1>
            <button onClick={()=>{
                counter++;
                console.log(counter);
                }}>Plus</button>
            <button onClick={()=>{
                counter--;
                console.log(counter);
            }}>Minus</button>
        </>
    )
}

export default App;