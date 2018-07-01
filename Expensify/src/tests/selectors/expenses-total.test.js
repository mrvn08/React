import selectExpenseTotal from '../../selectors/expenses-total';
import expensesTestData from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    expect(selectExpenseTotal([])).toBe(0);
});

test('Should correctly add up to a single expense', () => {
    expect(selectExpenseTotal([expensesTestData[0]])).toBe(195);
});

test('Should correctly add up to multiple expenses', () => {
    expect(selectExpenseTotal(expensesTestData)).toBe(110895);
});