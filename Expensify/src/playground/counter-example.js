
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
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () =>{ 
    count--;
    renderCounterApp();
};
const reset = () =>{ 
    count = 0;
    renderCounterApp();
};

//Challenge
//Make button "-1" and reset

//class has to be defined as className in JSX
const  appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
}

renderCounterApp();