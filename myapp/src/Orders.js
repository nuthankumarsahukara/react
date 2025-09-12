import { NavLink, Outlet } from "react-router-dom";

function Orders(){
    return(
        <>
            <button><NavLink to="offline">Offline Orders</NavLink></button>
            <button><NavLink to="online">Online Orders</NavLink></button>
            <h1>This is Orders Page</h1>
            <Outlet/>
        </>
    )
}

export function OnlineOrders(){
    return(
        <>
            <h2>This is Online Orders content Page</h2>
        </>
    )
}

export function OfflineOrders(){
    return(
        <>
            <h2>This is Offline Orders content Page</h2>
        </>
    )
}

export default Orders;