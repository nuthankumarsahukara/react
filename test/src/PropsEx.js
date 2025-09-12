import { Component } from "react";

class PropsEx extends Component{
    render(){
        return(
            <>
                <h1>Name : {this.props.name}</h1>
                <h1>Age : {this.props.age}</h1>
                <h1>address : {this.props.address.dno},{this.props.address.street}</h1>
            </>
        )
    }
}

export default PropsEx;