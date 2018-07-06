const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Marvin',
            age: 27
        });
        // reject('Something went wrong');
    }, 5000)
});

//You can only resolve, reject once

console.log("Before");

// promise.then((data) => {
//     console.log('1', data);
// });

promise.then((data) => {
    console.log('2', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 5000)
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log(`error: ${error}`);
});
//catch allows you to do something when reject is called.
//or you could also do it this way:
// promise.then((data) => {
//     console.log('2', data);
// }, (error) => {
//     console.log(`error: ${error}`);
// });

console.log("After");