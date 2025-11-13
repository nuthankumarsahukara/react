const withMessage = (Component) => {
    return (props) => (
        <div>
            <h2>Message: {props.message}</h2>
            <Component {...props} />
        </div>
    );
};

const Display = () => <p>This is a message display component.</p>;

export default withMessage(Display);