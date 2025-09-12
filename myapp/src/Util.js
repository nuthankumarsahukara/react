import { useEffect,useState } from "react";
function useUtil(url){
    let [data,setData]=useState({});
    useEffect(() => {
        getDetails();
    }, []);

async function getDetails(){
        let res= await fetch(url);
        let apidata=await res.json();
        setData(apidata);
    }

    return data;
}


export default useUtil;