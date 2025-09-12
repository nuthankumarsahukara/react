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
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("inside the snapshot");
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

export default ChildProps;
