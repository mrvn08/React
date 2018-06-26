import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters} from '../../components/ExpenseListFilters';
import { filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters = {filters} 
            setTextFilter  = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />
    );
});

test('Should render filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render filters with alternate data', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    expect(wrapper).toMatchSnapshot();

    wrapper.find('input').simulate('change', { target: { value: 'Some text'}});
    expect(setTextFilter).toHaveBeenLastCalledWith('Some text');
    
    expect(wrapper).toMatchSnapshot();
});

test('Should sort by date', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();

    wrapper.find('select').simulate('change', { target: { value: 'date'}});
    expect(sortByDate).toBeCalled();

    expect(wrapper).toMatchSnapshot();
});

test('Should sort by amount', () => {
    expect(wrapper).toMatchSnapshot();

    wrapper.find('select').simulate('change', { target: { value: 'amount'}});
    expect(sortByAmount).toBeCalled();

    expect(wrapper).toMatchSnapshot();
});

test('Should handle date changes', () => {
    expect(wrapper).toMatchSnapshot();

    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: altFilters.startDate, endDate: altFilters.endDate });
    expect(setStartDate).toHaveBeenLastCalledWith( altFilters.startDate );
    expect(setEndDate).toHaveBeenLastCalledWith( altFilters.endDate );
    
    expect(wrapper).toMatchSnapshot();
});

test('Should handle date focus changes', () => {
    expect(wrapper).toMatchSnapshot();

    wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
    expect(wrapper.state('calendarFocused')).toBe('startDate');
});