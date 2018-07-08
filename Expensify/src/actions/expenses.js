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
    return (dispatch) => {
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        
        return database.ref('expense').push(expense).then((ref) => {
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
    return (dispatch) => {
        return database.ref(`expense/${id}`).remove().then(() => {
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
    return (dispatch) => {
        return database.ref(`expense/${id}`).update({
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
    return (dispatch) => {
        return database.ref('expense')
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