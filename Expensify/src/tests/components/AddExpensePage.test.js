import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expensesTestData from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>)
});

test('Should render add expense page correctly',() => {
    // const onSubmit = jest.fn();
    // const history = { push: jest.fn() };
    // const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>)
    
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
    // const onSubmit = jest.fn();
    // const history = { push: jest.fn() };
    // const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>)
    // These definitions are transferred to the before Each function on top

    wrapper.find('ExpenseForm').prop('onSubmit')(expensesTestData[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expensesTestData[1]);
});