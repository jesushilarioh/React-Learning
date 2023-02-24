
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there. <br />How do you do?</p>
        </>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to quick start for React</h1>
            <MyButton />
            <AboutPage />
        </div>
    );
}