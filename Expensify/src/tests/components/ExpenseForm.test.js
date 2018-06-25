import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expensesTestData from '../fixtures/expenses';
import moment from 'moment';

test('Should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render Expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={ expensesTestData[0] }/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
    //having 2 snapshots makes sure that the error is rendered
    //before the form is submitted and after it is submitted
});

test('Should set description on input change', () => {
    const newDescription = 'New Description';
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
        target:{ value: newDescription }
    });

    expect(wrapper.state('description')).toBe(newDescription);
    expect(wrapper).toMatchSnapshot();
});

test('Should change note on inpute change', () => {
    const newNote = 'New Note';
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {
        target:{ value: newNote}
    });

    expect(wrapper.state('note')).toBe(newNote);
    expect(wrapper).toMatchSnapshot();
});

test('Should change amount on valid input', () => {
    const newAmount = '23.50';
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target:{ value: newAmount }
    });

    expect(wrapper.state('amount')).toBe(newAmount);
    expect(wrapper).toMatchSnapshot();
});

test('Should change amount on invalid input', () => {
    const newAmount = '12.222';
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target:{ value: newAmount }
    });

    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
});

test('Should call on submit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={ expensesTestData[0] } onSubmit={ onSubmitSpy }/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        amount: expensesTestData[0].amount,
        createdAt: expensesTestData[0].createdAt,
        description: expensesTestData[0].description,
        note: expensesTestData[0].note
    });
});

test('Should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendarFocused to true when onFocusChange is called', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
    expect(wrapper.state('calendarFocused')).toEqual(true);
});