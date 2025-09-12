import { Component } from "react";

class Cprops extends Component{
    constructor(props){
        console.log("Constructor Calling");
        super(props);
        this.state={
            counter:this.props.data+1,
            product:"Dummy"
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("DerivedStateFromProps Calling");
        return {
            counter:props.data+1
        }
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate calling");
        return true;
    }
    componentDidMount(){
            console.log("DidMount calling");
            fetch('https://fakestoreapi.com/products/1')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({...this.state,product:json.title})
        });
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("getSnapshotBeforeUpdate Calling");
        return null;
    }

    componentDidUpdate(){
        console.log("inside the did update");
    }

    render(){
        console.log("Render Calling");
        return(
            <>
                <h1>Child Props</h1>
                <h3>Count :{this.props.data}</h3>
                <h2>Count :{this.state.counter} </h2>
                <h2>Product Name: {this.state.product}</h2>
            </>
        )
    }
    componentWillUnmount(){
        console.log("inside unmount");
    }
}

export default Cprops;