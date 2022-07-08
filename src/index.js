const user = {
    firstName: "Franco",
    lastName: "Rossi"
};

function helloWorld (name) {
    return user.firstName;
}

const element = (
    <h1>
        Hello, {helloWorld(user)}!
    </h1>
)
