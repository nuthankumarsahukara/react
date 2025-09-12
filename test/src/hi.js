import React from "react";

function hi(props){
    return(
        <div>
            {props.children}
            <ChildrenMap>
                <p>Hello</p>
                              
            </ChildrenMap>
        </div>
    )
    
}

function ChildrenMap({children}){
    return (
    <div>
        <ul>
            {React.Children.map(children,(c)=>(
                <li>{c}</li>
            ))}
        </ul>
        <p>Total Children : {React.Children.count(children)}</p>
        {React.Children.only(children)}        
    </div>
    );
}

export default hi;