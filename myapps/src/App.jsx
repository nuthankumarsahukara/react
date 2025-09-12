import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {fetchUsers} from './store'
function App() {
    let users =useSelector((state)=>state.user.users);
    console.log(users);
    let status =useSelector((state)=>state.user.status);
    let error=useSelector((state)=>state.user.error);
    const dispatch = useDispatch();
      useEffect(()=>{
            dispatch(fetchUsers())
        },[]);
    return(
      <>
        <div className='container mt-5'>
          <h2 className='text-center text-primary'>API calling from Redux ToolKit</h2>
          {status==="loading" && <h2 className='text-center text-success'>Loading the Data....</h2>}
          {status==="completed" && (
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user)=>(
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
              ))}
            </tbody>
          </table>
          )}
          {status=="error" && <h2 className='text-center text-danger'>{error}......</h2>}
        </div>
      </>
  )
}

export default App;
