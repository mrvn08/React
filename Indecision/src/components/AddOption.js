//remake with babel transform class properties
import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if(!error){
            e.target.elements.option.value = "";
        }
    }

    //We're still going to use regular es6 for react methods such as render() and react component lifecycle methods.
    render(){
        return (
            <div>
                {this.state.error && <p className="add-option__error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" name="option" type="text" placeholder="C'mooooon do it! DO IT NOW!"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}