"use strict";

console.log('App.js is running');

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['item one', 'item two']
};

//===================================================
// JSX - JavaScript XML
//===================================================
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    app.options.length > 0 ? React.createElement(
        "p",
        null,
        "Here are your options"
    ) : React.createElement(
        "p",
        null,
        "No Options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

//===================================================
// Render Exercise
//===================================================
// const  user = {
//     name: 'Moises Limson',
//     age: 29,
//     location: 'Narnia'
// };

// function getLocation(userinfo){
//     if(userinfo.location) 
//         return <p>Location: {userinfo.location}</p>;
// }

// const  templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age &&  user.age >= 18 )&& <p>Age: {user.age}</p>}
//         {getLocation(user)}
//     </div>
// );

//===================================================
// Counter
//===================================================

var count = 0;

var templateThree = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { id: "my-id", "class": "button" },
        "+1"
    ),
    React.createElement("button", null)
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateThree, appRoot);
