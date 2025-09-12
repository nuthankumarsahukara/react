import User from "./User";

function App(){
  return(
    <>
      <User/>
      <button onClick={()=>{location='https://www.facebook.com'}}>facebook</button>
    </>
  )
}

export default App;