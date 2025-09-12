import { Component } from "react";

class Child extends Component{
    constructor(props){
        console.log("Constructor Calling.......");
        super(props);
        this.state={
            count:this.props.data+1,
            product:"Dummy"
        } 
    }
    static getDerivedStateFromProps(props,state){
            console.log("DerivedState Calling");
            return{
                ...state,count:props.data+1
            }
    }

    shouldComponentUpdate(){
        console.log("should update");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("inside the snapshot");
        console.log("Prev Props :",prevProps);
        console.log("Prev State :",prevState);
        return null;
    }

    componentDidUpdate(){
        console.log("inside the did update");
    }
    
    componentDidMount(){
        console.log("componentDidMount");
        fetch('https://fakestoreapi.com/products/1')
        .then(response => response.json())
        .then(json => {console.log(json)
                        this.setState({...this.state,product:json.title})
        });
    }
    render(){
        console.log("Render");
        return(
            <>
                <h1>This is child class</h1>
                <h2> props :{this.props.data}</h2>
                <h2>Count :{this.state.count} </h2>
                <h2>Product Name :{this.state.product} </h2>
            </>
        )
    }
    componentWillUnmount(){
        console.log("inside unmount");
    }
}

export default Child;