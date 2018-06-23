import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('Should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type:'SORT_BY_DATE',
        sortBy: 'date'
    });
});

test('Should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type:'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
});

test('Should generate set text by filter with supplied value', () => {
    const action = setTextFilter( 'Some text filter' );
    expect(action).toEqual({
        type:'SET_TEXT',
        text: 'Some text filter'
    });
});

test('Should generate set text by filter with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT',
        text: ''
    });
});