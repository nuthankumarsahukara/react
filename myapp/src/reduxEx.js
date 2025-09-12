import {useDispatch} from 'react-redux';
function reduxEx(){
    const dispatch=useDispatch();
    async function fetchData(dispatch,getState){
        let res= await fetch('https://jsonplaceholder.typicode.com/users');
        let data= await res.json();    
    }
    return(
        <>
            <button onClick={dispatch(fetchData())}>GET</button>
        </>
    )
}

export default reduxEx;