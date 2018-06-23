// Set Text Filter
export const setTextFilter = ( text = "" ) => ({
    type: 'SET_TEXT',
    text
});

// Sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

// Sort by amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

// Set start date
export const setStartDate = ( startDate = undefined ) => ({
    type: 'SET_START_DATE',
    startDate
});

// Set end date
export const setEndDate = ( endDate = undefined ) => ({
    type: 'SET_END_DATE',
    endDate
});