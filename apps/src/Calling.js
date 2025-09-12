function Calling(Component) {
    return (props) => (
        <>
            <h2>Message: {props.message}</h2>
            <Component {...props} />
        </>
    );
}

function Display() {
    return (
        <>
            <p>This is message Calling from Display Component</p>
        </>
    );
}

export default Calling(Display);
