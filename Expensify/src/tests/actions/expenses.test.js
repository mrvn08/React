import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

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

test('Should setup add expense action object with provided valuse', () => {
    const expenseData = {
        description: 'Some test description', 
        note: 'Some test note', 
        amount: 9999, 
        createdAt: 110000
    };

    expect(addExpense(expenseData)
    ).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with default valuse', () => {
    expect(addExpense()
    ).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});