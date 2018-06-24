import React from 'react';
import { shallow } from 'enzyme';
import ExpensifyDashboardPage from '../../components/ExpensifyDashboardPage'

test('Should render dashboard page properly', () => {
    const wrapper = shallow(<ExpensifyDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
