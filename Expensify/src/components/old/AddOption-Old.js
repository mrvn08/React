import React from 'react';

//note that exporting default class definition is possible. Just not possible with variables.
export default class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if(!error){
            e.target.elements.option.value = "";
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type="text" placeholder="C'mooooon do it! DO IT NOW!"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}