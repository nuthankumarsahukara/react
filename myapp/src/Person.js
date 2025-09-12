function Fun({ name = "Guest", age = 18, place = "Vizag" }) {
    return (
        <div>
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
            <h4>Place: {place}</h4>
        </div>
    );
}

export default Fun;
