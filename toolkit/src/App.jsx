import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Store";

function App(){
  let users=useSelector((state)=>state.user.users);
  console.log(users);
  let status=useSelector((state)=>state.user.status);
  let error=useSelector((state)=>state.user.error);

  const dispatch=useDispatch();

  useEffect(()=>{
      dispatch(fetchUsers())
  },[])
  return(
    <>
        <div className='container mt-5'>
          <h2 className='text-center text-capitalize text-primary'>User Data using ToolKit async thunk</h2>
          {status === 'loading' && <h2 align='center'>Loading Data ....</h2>}
          {status === 'completed' &&(
          <table className='table table-bordered text-center w-100 '>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th colSpan={3}>Address</th>
                      <th>Lat</th>
                  </tr>
              </thead>
              <tbody>
                  {
                  users.map((user)=>(
                          <tr key={user.id}>
                              <td>{user.id}</td>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>{user.address.city}</td>
                              <td>{user.address.street}</td>
                              <td>{user.address.zipcode}</td>
                              <td>{user.address.geo.lat}</td>
                          </tr>
                  ))}
              </tbody>
          </table>
          )}
          {status === 'error' && <h2 className='text-center text-danger'>{error} ....</h2>}
      </div>

    </>
  )
}

export default App;