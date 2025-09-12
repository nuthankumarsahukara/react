import './datapro.css'
function Datapro(){
    let heading={
        color:"blue",
        backgroundColor:"pink",
        fontFamily:"monospace",
        fontSize:"35px",
    }
    return(
    <div>      
      <h1 style={{backgroundColor:'yellow',color:'red'}}>Welcome to Function Component </h1>
      <p style={heading}>Welcome to para in Function Component</p>
      <h4 className="head">Welcome to external CSS</h4>
    </div>
    );
}

export default Datapro;