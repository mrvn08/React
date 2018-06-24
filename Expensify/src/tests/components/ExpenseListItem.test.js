import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expensesTestData from '../fixtures/expenses';

test('Should render expense item', () => {
    const wrapper = shallow(<ExpenseListItem {...expensesTestData[0]} />);
    expect(wrapper).toMatchSnapshot();
});
