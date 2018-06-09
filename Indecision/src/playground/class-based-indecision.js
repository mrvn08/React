//Creating react components
//Uppercase classes are a must in react components.
//Class based component

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

//To modify the array above through a different component, functions should be passed as props
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        });
    }
    
    handlePick(){
        const randomNum =  Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(newOption){
        //Validation

        if(!newOption){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(newOption) > -1){
            return 'Option already exists';
        } 

        //We don't put an else clause to go to set state because if the return is called above it ends
        //the function anyway.

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(newOption)
            }
        });
        
        console.log(newOption);
    }
    //Note that the new option is concatenated into the prevstate.options and not pushed.
    //This is because we don't want to be modifying the prevstate options.
    //We're here to set the new one. concat returns a new array while push modifies the existing one

    render(){
        const title = "Indecision App"; 
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                {/*handleDeleteOptions function passed as prop in the Options component above.*/}
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

//Challenge
class Options extends React.Component{
    constructor(props){
        super(props);
        //this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    // handleRemoveAll(){
    //     console.log(this.props.options);
    //     //alert("Eliminate!");
    // }

    render(){
        const options = this.props.options;
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {/* Using the passed handleDeleteOptions function from the IndecionApp component itself*/}
                {options.map((option) => <Option key={option} optionText={option} />)}
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        const optionText = this.props.optionText;
        return(
            <div>
                Option: {optionText}
            </div>
        );
    }
}

//Challenge
class AddOption extends React.Component{
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

        this.setState(() => {
            return { error }
        });

        e.target.elements.option.value = "";
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

ReactDOM.render(<IndecisionApp /> ,document.getElementById('app'));