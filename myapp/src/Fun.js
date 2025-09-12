import React,{useEffect} from "react";
export function func1(){
    return (
    <div>
        <h1>welcome to function Component</h1>
    </div>
    );
}

export let func2 = () => {
    return(
        <div>
            <h1>Welcome to Arrow Function</h1>
        </div>
    );
}

export const NameCalling = (name) =>{
    return <h1>Welcome {name}</h1>
}

export class Type extends React.Component{
    hello(){
        alert("Welcome to class function");
    }
    render(){
        return(
            <div>
                <button onClick={this.hello}>Hello</button>
            </div>
        )
    }    
}

export function Example() {
    useEffect(() => {
        console.log("Component Mounted!");
    }, []);
}

export const withMessage = (Component) => {
    return (props) => (
        <div>
            <h2>Message: {props.message}</h2>
            <Component {...props} />
        </div>
    );
};

const Display = () => <p>This is a message display component.</p>;

export default withMessage(Display);