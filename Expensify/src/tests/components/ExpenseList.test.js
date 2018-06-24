import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenseTestData from '../fixtures/expenses';

test('Should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenseTestData}/>);
    expect(wrapper).toMatchSnapshot()
});

test('Should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot()
});