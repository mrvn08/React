import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>

        <div className="list-body">
        {
            props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No expenses</span>
                </div>
            ) : props.expenses.map((expense, index) => <ExpenseListItem key={expense.id} {...expense}/>)            
        }
        </div>
    </div>
);

//Unconnected Expense List is exported as a named export for testing

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//Automatically reruns whenever state in store is changed
//state.expenses is being passed to prop expenses in ExpenseList
//When component is connected to store, it is reactive. The values change on screen realtime

export default connect(mapStateToProps)(ExpenseList);

