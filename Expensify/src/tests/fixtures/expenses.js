import moment from 'moment';

const expensesTestData = [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    },{
        id: '2',
        description: 'Ren',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },{
        id: '2',
        description: 'Credit Card',
        note: '',
        amount: 1200,
        createdAt: moment(0).add(4, 'days').valueOf()
    },
]

export default expensesTestData;