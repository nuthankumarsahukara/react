import { Component } from "react";

class ChildProps extends Component{
    constructor(props){
        console.log("Constuctor");
        super(props);
        this.state={
            count:this.props.data+1,
            product:"Dummy"
        } 
    }
    static getDerivedStateFromProps(props,state){
            console.log("DerivedState");
            return{
                ...state,count:props.data+1
            }
    }

    shouldComponentUpdate(){
        console.log("should update");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Inside the snapshot");
        console.log(prevState);
        console.log(prevProps);
        return null;
    }

    componentDidUpdate(){
        console.log("Inside the DidUpdate Calling.........");
    }
    componentDidMount(){
        console.log("componentDidMount Calling....");
        fetch('https://fakestoreapi.com/products/12')
        .then(response => response.json())
        .then(json => {console.log(json)
                        this.setState({...this.state,product:json.title})
        });
    }
    render(){
        console.log("Render Calling Calling");
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
        console.log("Inside unmount Calling");
    }
}

export default ChildProps;
