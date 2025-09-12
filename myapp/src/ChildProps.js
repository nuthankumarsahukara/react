import React from "react";
class ChildProps extends React.Component{
    render(){
    return(
        <div>
            <h4>My Name is {this.props.name} and my age is {this.props.age}</h4>
        </div>
    );
    }
}
ChildProps.defaultProps = {
    name: "Guest",
    age: 18,
  };

export default ChildProps;