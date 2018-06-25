import React from 'react';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

export class EditExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.editExpense(this.props.match.params.id, expense);
        this.props.history.push('/');
    };

    onClick = () => {
        this.props.removeExpense({ id: this.props.match.params.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id == props.match.params.id )
    };
};

const mapDispatchToProps = (dispatch) => ({ 
    editExpense: ( id, expense ) => dispatch(editExpense(id, expense)),
    removeExpense: ({ id }) => dispatch(removeExpense({ id: id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
