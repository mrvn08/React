import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@init'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const state = filtersReducer({ sortBy: 'amount'}, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('Should set text to new text', () => {
    const state = filtersReducer( undefined, { type: 'SET_TEXT', text: 'Some new text'});
    expect(state.text).toBe('Some new text');
});

test('Should set start date to provided value', () => {
    const state = filtersReducer( undefined, { type: 'SET_START_DATE', startDate: moment(0) });
    expect(state.startDate).toEqual(moment(0));
});

test('Should set end date to provided value', () => {
    const state = filtersReducer( undefined, { type: 'SET_END_DATE', endDate: moment(0)});
    expect(state.endDate).toEqual(moment(0));
});


