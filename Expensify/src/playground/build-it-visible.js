let toggle = false;

const toggleVisibility = (current) => {
    toggle = !toggle;
    renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{toggle? "Hide Details" : "Show Details"}</button>
            {toggle && <p>Now you see me!!</p>}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderApp();  