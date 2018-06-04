console.log('App.js is running');

const  app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['item one', 'item two']
};

//===================================================
// JSX - JavaScript XML
//===================================================
const  template = (
    <div>
        <h1>{app.title}</h1>
        { app.subtitle && <p>{app.subtitle}</p> }
        { app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
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

let count = 0;

const templateThree = (
    <div>
        <h1>Count: {count}</h1>
        <button id="my-id" class="button">+1</button>
        <button></button>
    </div>
);
const  appRoot = document.getElementById('app');
ReactDOM.render(templateThree, appRoot);