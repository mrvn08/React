import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expensesTestData from '../fixtures/expenses';

test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expensesTestData, filters);
    expect(result).toEqual([ expensesTestData[2], expensesTestData[1] ]);
});

test('Should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expensesTestData, filters);
    expect(result).toEqual([ expensesTestData[2], expensesTestData[0] ]);
});

test('Should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expensesTestData, filters);
    expect(result).toEqual([ expensesTestData[0], expensesTestData[1] ]);
});

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expensesTestData, filters);
    expect(result).toEqual([ expensesTestData[2], expensesTestData[0], expensesTestData[1] ]);
});

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expensesTestData, filters);
    expect(result).toEqual([ expensesTestData[1], expensesTestData[2], expensesTestData[0] ]);
});
