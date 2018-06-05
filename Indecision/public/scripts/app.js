'use strict';

console.log('App.js is running');

var appRoot = document.getElementById('app');

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

//===================================================
// JSX - JavaScript XML
//===================================================

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
    }

    renderList();
};

var clearOptions = function clearOptions() {
    app.options = [];
    renderList();
};

var popOptions = function popOptions() {
    app.options.pop();
    renderList();
};

var renderList = function renderList() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? "Here are your options" : "No Options"
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: clearOptions },
            'Remove all'
        ),
        React.createElement(
            'button',
            { onClick: popOptions },
            'Remove last added'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option', placeholder: 'Go ahead' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderList();
