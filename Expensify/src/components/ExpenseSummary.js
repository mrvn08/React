import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            {
                props.numExpenses > 0 ? (
                <h1 className="page-header__title">
                    Viewing <span>{props.numExpenses}</span> {props.numExpenses > 1 ? "expenses" : "expense"} totalling <span>{numeral(props.totalExpenses).format('$0,0.00')}</span>
                </h1> )
                : 
                (<h1 className="page-header__title">Start by adding an expense</h1>)
            }
            <div className="page-header__actions">
                <Link to="/create" className="button">Add Expense</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    numExpenses: getVisibleExpenses(state.expenses, state.filters).length,
    totalExpenses: selectExpensesTotal(getVisibleExpenses(state.expenses, state.filters))/100,
});

export default connect(mapStateToProps)(ExpenseSummary);
