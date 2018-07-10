import uuid from 'uuid';
import database from '../firebase/firebase';
//component calls action generator
//action generator returns action
//component dispatches function 
//function runs (has the ability to dispatch other actions and do whatever it wants)

// Add Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        
        return database.ref(`users/${uid}/expense`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};
//this only works because we setup thunk

// Remove Expense
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expense/${id}`).remove().then(() => {
            dispatch(removeExpense({id: id}));
        });
    };
};

// Edit Expense
export const editExpense = ( id = "", updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = ( id = "", updates ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expense/${id}`).update({
            ...updates
        }).then(() => {
            dispatch(editExpense( id, updates ));
        });
    };
};

// Set Expense
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSE',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expense`)
        .once('value')
        .then((snapshot) => {
            const expenses = [];
            
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        });
    }
};