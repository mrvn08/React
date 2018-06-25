import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expensesTestData from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper, match;

beforeEach(() => {
    match = { params: { id: 1 }};
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage match = {match} editExpense={editExpense} removeExpense={removeExpense} history={history}/>);
});

test('Should render edit expense page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle edit expense function', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expensesTestData[0]);
    expect(editExpense).toHaveBeenLastCalledWith( 1, expensesTestData[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle remove expense function', () => {
    wrapper.find('ExpenseForm').prop('onClick')();
    expect(removeExpense).toHaveBeenLastCalledWith({ id: 1 });
    expect(history.push).toHaveBeenLastCalledWith('/');
});
