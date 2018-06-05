console.log('App.js is running');

const  appRoot = document.getElementById('app');

const  app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

//===================================================
// JSX - JavaScript XML
//===================================================

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
    }

    renderList();
};

const clearOptions = () => {
    app.options = [];
    renderList();
};

const popOptions = () => {
    app.options.pop();
    renderList();
};

const renderList = () => {
    const  template = (
        <div>
            <h1>{app.title}</h1>
            { app.subtitle && <p>{app.subtitle}</p> }
            <p>{ app.options.length > 0 ? "Here are your options" : "No Options"}</p>
            <p>{ app.options.length}</p>
            <button onClick={clearOptions}>Remove all</button>
            <button onClick={popOptions}>Remove last added</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" placeholder="Go ahead"></input>
                <button type="submit">Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderList();

