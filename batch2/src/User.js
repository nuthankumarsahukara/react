import React from "react";

class User extends React.Component{
    render(){
            let {name,age,place}=this.props
        return(
            <>
                <h1>Name : {name}</h1>
                <h1>Age  : {age}</h1>
                <h1>Place : {place}</h1>
            </>
        )       
    }
}

export default User;