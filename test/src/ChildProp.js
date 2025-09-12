import { Component } from "react";

class ChildProp extends Component{
    constructor(props){
        super(props)
        this.state={
            count:this.props.data+10,
            product:"Dummy"
        }
        console.log("Constructor Calling......");
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps Calling......");
        if(state.count !== props.data+10){
            return {count : props.data+10 }
        }
        return null;
    }

    componentDidMount(){
        console.log("Component Did Mount Calling....");
        fetch('https://fakestoreapi.com/products/1')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({product:data.title})  
        });
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate calling....")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate Calling......");
        console.log("Previous Props :",prevProps);
        console.log("Previous State :",prevState);
        return null;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate calling....");
        return true;
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
        console.log("Rendering Calling.......");
        return(
            <>
                <h1>React Component Life Cycle from Child</h1>
                <h1>Props from Parent Class : {this.props.data}</h1>
                <h1>State from Child Class : {this.state.count}</h1>
                <h1>Product Data : {this.state.product}</h1>
            </>
        )
    }
}

export default ChildProp;