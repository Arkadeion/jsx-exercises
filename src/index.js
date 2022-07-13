const name = "Franco";

function helloWorld (name) {
    return <h1>Hello, {name}</h1>;
}

const component = (
    <div>
        {helloWorld(name)}
    </div>
)
