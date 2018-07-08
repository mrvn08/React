import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import expensesTestData from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expensesTestData.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    });
    database.ref('expense').set(expensesData).then(() => done());
});

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
    //use toEqual to compare objects instead as toBe uses ===.
});

test('Should setup edit expense action object', () => {
    expect(editExpense('someId', { note: 'test', amount: 123 })).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'someId',
        updates: {
            note: 'test',
            amount: 123
        }
    });
});

test('Should setup add expense action object with provided values', () => {
    const action = addExpense(expensesTestData[2]);
    expect(action)
    .toEqual({
        type: 'ADD_EXPENSE',
        expense: expensesTestData[2]
    });
});

test('Should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: "Mouse",
        amount: 3000,
        note: "This one is better",
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expense/${actions[0].expense.id}`).once('value');
        //done is added to this asynchronous call so that jest waits for it.
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        note: '', 
        amount: 0, 
        createdAt: 0
    };
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String), 
                ...expenseData            
            }
        });

        return database.ref(`expense/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should setup set expense action object with data', () => {
    const action = setExpenses(expensesTestData);
    expect(action).toEqual({
        type: 'SET_EXPENSE',
        expenses: expensesTestData
    });
});

test('Should set expense to store from database', (done) => {
    const store = createMockStore({});

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'SET_EXPENSE',
            expenses: expensesTestData
        });

        done();
    }) 
});

test('Should remove expense from database', (done) =>{
    const store = createMockStore({});

    store.dispatch(startRemoveExpense(expensesTestData[0])).then(() => {
        database.ref(`expense/${expensesTestData[0].id}`)
        .once('value')
        .then((snapshot) => {
            expect(snapshot.val()).toBe(null);
            done();
        });
    });
});