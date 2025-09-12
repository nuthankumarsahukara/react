import React from 'react';

function ChildPropsEx(props) {
    return (
        <div>
            Props Calling :{props.children}
            <ChildPropsEx1>
                <p>Welcome to class Child props</p>
            </ChildPropsEx1>
            <ChildrenMap>
                <p>Hello</p>                
            </ChildrenMap>
        </div>
        
    );
}

class ChildPropsEx1 extends React.Component{
    render(){
        return(
            <div style={{color:"red"}}>{this.props.children}</div>
        )
    }
}

const ChildrenMap = ({children}) =>{
    return (
        <div>
    <ul>
        {React.Children.map(children,(child)=>(
            <li>{child}</li>
        ))}
    </ul>
    <p>Total Children : {React.Children.count(children)}</p>
    {React.Children.only(children)}
    </div>
    );
}

export default ChildPropsEx;
