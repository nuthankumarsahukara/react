function Background(){
    return(
        <>
        <center>
        <input type="color" onChange={(e)=>{
            document.body.style.background=e.target.value;
        }}/>
        </center>
        </>
    );
}

export default Background;
