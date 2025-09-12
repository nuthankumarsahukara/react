import {NavLink,Outlet} from 'react-router-dom';

function Order(){
    return(
        <>
            <Outlet/>
            <h1>Welcome to Order</h1>
            <button ><NavLink to="profile" className='link'>Profile</NavLink></button>
            <button><NavLink to="settings" className='link'>Settings</NavLink></button>
        </>
    )
}

export default Order;