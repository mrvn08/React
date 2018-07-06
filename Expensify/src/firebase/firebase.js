import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBFxf6G8ERjln3iptnr2_7SW91x1uzc5Og",
    authDomain: "expensify-f0e60.firebaseapp.com",
    databaseURL: "https://expensify-f0e60.firebaseio.com",
    projectId: "expensify-f0e60",
    storageBucket: "expensify-f0e60.appspot.com",
    messagingSenderId: "682289326446"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         })

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses); 
// });
// There are other events you can watch such as child_added, child_removed, child_changed, child_moved

// // Child Removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //Child Changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //Child Added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//     description: 'Expense 1',
//     amount: 1011,
//     note: 'Impulsive buying',
//     createdAt: 0
// });
