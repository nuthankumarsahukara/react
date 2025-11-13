import React from "react";

class User extends React.Component{

    handleClick= () =>{
        this.props.data("Hello This is Message from Child Component");
    }
    render(){
    return(
        <>
            <button onClick={this.handleClick}>Send Data to Parent Component</button>
        </>
    )
}
}

export default User;