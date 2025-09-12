import { useEffect, useState } from "react";

function useGetAPICall(url){
    let[data,setData]=useState("null");
    useEffect(()=>{
        async function getDetails() {
            let res=await fetch(url);
            let apiData=await res.json();
            setData(apiData);
        }
        getDetails();
    },[url]);

    return data;
}

export default useGetAPICall;