import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expensesTestData from '../fixtures/expenses';

test('Should set default state', () => { 
    const state = expensesReducer( undefined, { type: '@@init' });
    expect(state).toEqual([]);
});

test('Should add a new expense', () => { 
    const newExpense = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'Bleh',
            note: 'something else',
            amount: 4000,
            createdAt: moment(0).add(7, 'days').valueOf()
        }
    };

    const state = expensesReducer(expensesTestData, newExpense);
    expect(state).toEqual([ ...expensesTestData, newExpense.expense ]);
});

test('Should remove an expense based on provided id', () => { 
    const expenseToDelete = {
        type: 'REMOVE_EXPENSE',
        id: expensesTestData[2].id
    };

    const state = expensesReducer(expensesTestData, expenseToDelete);
    expect(state).toEqual( expensesTestData.filter((expense) => expense.id != expenseToDelete.id ));
});

test('Should edit an existing expense to new values', () => { 
    const expenseToEdit = {
        type: 'EDIT_EXPENSE',
        id: expensesTestData[1].id,
        updates: {
            description: 'Bleh',
            note: 'something else',
            amount: 4000,
            createdAt: moment(0).add(9, 'days').valueOf()
        }
    };

    const state = expensesReducer(expensesTestData, expenseToEdit);
    expect(state[1]).toEqual({ ...expensesTestData[1], ...expenseToEdit.updates });
});

test('Should not update any expense based on invalid id', () => { 
    const expenseToEdit = {
        type: 'EDIT_EXPENSE',
        id: 6,
        updates: {
            description: 'Bleh',
            note: 'something else',
            amount: 4000,
            createdAt: moment(0).add(9, 'days').valueOf()
        }
    };

    const state = expensesReducer(expensesTestData, expenseToEdit);
    expect(state).toEqual(expensesTestData);
});
