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

database.ref('notes/-LGg-QRqAo2QLbikl1aL').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React and Redux'
// });
//pushes a new entry with a unique id

// const notes = [{
//     id:'12',
//     title: 'First note',
//     body: 'this is my note'
// }, {
//     id:'761ase',
//     title: 'Another note',
//     body: 'this is my note'
// }];
// //this gets converted into an object structure in firebase

// const firebaseNotes = {
//     notes: { 
//         aasd67: {
//             title: 'First note',
//             body: 'this is my note'
//         },
//         ays231: {
//             title: 'First note',
//             body: 'this is my note'
//         }
//     }
// };


// database.ref('notes').set(firebaseNotes);
//Fetching Data

// database.ref().once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });
// //gets all information

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// const newSubscription = database.ref().on('value', (snapshot) => {
//     console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}.`);
// });
// //this watches for database changes and executes the callback function

// setTimeout(() => {
//     database.ref('age').set(28);
//     database.ref('name').set('Moises Limson')
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);
// //unsubscribing a specific subscription

// setTimeout(() => {
//     database.ref('age').set(30);
//     database.ref('job').update({
//         title: 'Cashier',
//         company: 'Ang Tunay Beef House'
//     })
// }, 10500);

//Setting Data

// database.ref().set({
//     name: 'Marvin Limson',
//     age: '26',
//     stressLevel: 6,
//     job: {
//         title: 'Front End Developer',
//         company: 'BMI'
//     },
//     isSingle: true,
//     location: {
//         city: 'Barnet',
//         country: 'United Kingdom'
//     },
// }).then(() => {
//     console.log('Data is saved');
// }, (e) => {
//     console.log('This failed', e);
// });

//database.ref().set('This is my data');
// database.ref('age').set(27);
// database.ref('location/city').set('Edgware');

// database.ref('attributes').set({
//     height: 164,
//     weight: 170
// }).then(() => {
//     console.log('Hello I succeeded');
// },() => {
//     console.log('Hello I failed');
// });

//Removing data

// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('data was removed');
//     }).catch((e) => {
//         console.log('failed to remove data');
//     });

// Or
// database.ref('isSingle').set(null);

//Updating data
// database.ref().update({
//     name: 'Moises Limson',
//     age: 28,
//     job: 'Concept Designer',
//     isSingle: null
// })
//in this update call we are modifying 2 attributes, adding a new one, then deleting 'isSingle'

// database.ref().update({
//     job: 'Manager',
//     location: {
//         city: 'Manila'
//     }
// });
// this doesnt work as you might expect it to. Location completely replace it's contents with just the city
//to do this correctly we need to do this

// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Manila'
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Stronghold MNL',
//     'location/city': 'Annapolis',
//     'location/country': 'Philippines'
// });



