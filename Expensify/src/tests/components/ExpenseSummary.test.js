import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('Should render no expense to view message', () => {
    const wrapper = shallow(<ExpenseSummary numExpenses = {0} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render expenses and their total', () => {
    const wrapper = shallow(<ExpenseSummary numExpenses = {2} totalExpenses = {123.12} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render an expense and its total', () => {
    const wrapper = shallow(<ExpenseSummary numExpenses = {1} totalExpenses = {50.4} />);
    expect(wrapper).toMatchSnapshot();
});
