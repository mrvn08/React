import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expensesTestData from '../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper, match;

beforeEach(() => {
    match = { params: { id: 1 }};
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            match = {match} 
            editExpense={editExpense} 
            startRemoveExpense={startRemoveExpense} 
            history={history}
        />
    );
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
    //wrapper.find('button').prop('onClick')();
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: 1 });
    expect(history.push).toHaveBeenLastCalledWith('/');
});
