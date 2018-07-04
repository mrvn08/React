import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => (
    <div>
        <p>{props.numExpenses > 0 ? `Viewing ${props.numExpenses} ${props.numExpenses > 1 ? "expenses" : "expense"} totalling ${numeral(props.totalExpenses).format('$0,0.00')}` : `No expenses to view`}</p>
    </div>
);

const mapStateToProps = (state) => ({
    numExpenses: getVisibleExpenses(state.expenses, state.filters).length,
    totalExpenses: selectExpensesTotal(getVisibleExpenses(state.expenses, state.filters))/100,
});

export default connect(mapStateToProps)(ExpenseSummary);
