//Creating react components
//Uppercase classes are a must in react components.
//Stateless functional component
//Stateless functional component syntax
// - They are faster than class based components
// - Should be used whenever we can
// - Use this type for presentational/view only components
// - Easier to read, write, and test
// - These var names should start with a capital letter

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };

// ReactDOM.render(<User name="Marvin" age="27"/> ,document.getElementById('app'));

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    //===========================================================
    //Local Storage
    //===========================================================
    //- Local Storage persists between page loads
    //- only works with string data
    //- converts number to string
    //- use JSON to store arrays using:
    //--> JSON.stringify - converts array to string based JSON
    //--> JSON.parse - parses strings and returns JSON
    //- Use parseInt() to convert strings to number

    //1) Store items by using a key and value pair
    //- localStorage.setItem('name', 'Andrew'); //key has to be a string
    //2) Get items by using the key
    //- localStorage.getItem('name'); //returns Andrew
    //3) Remove items by using the key as well
    //- localStorage.removeItem('name'); //removes Andrew from local storage, returns null
    //4) Clear all data by using the clear method
    //- localStorage.clear();

    //===========================================================
    //Functions only available in class based components
    //===========================================================
    //Fires when component first gets mounted to the DOM
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }));
            }
        } catch(e){
            // Do nothing at all
        }
        
    }

    //Fires AFTER component updates (e.g state values change/prop values change)
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
    }

    //Fires JUST BEFORE component goes away
    componentWillUnmount(){
        console.log('Component will unmount');
    }

    //More of this in:
    //https://reactjs.org/docs/react-component.html
    //===========================================================

    //To modify the array above through a different component, functions should be passed as props
    handleDeleteOptions(){
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // });

        // Simplified Version

        this.setState(() => ({ options: [] }));
    }
    
    handleDeleteOption(optionToDelete){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToDelete)
        }));
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

        this.setState((prevState) => ({options: prevState.options.concat(newOption)}));
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
                    handleDeleteOption = {this.handleDeleteOption}
                />
                {/*handleDeleteOptions function passed as prop in the Options component above.*/}
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            { props.subtitle && <h2>{props.subtitle}</h2> }
        </div>
    );
}

//Default Props
Header.defaultProps = {
    title: "Indecision"
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}

//Challenge
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}    
                    />
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return( 
        <div>
            Option: {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
            {/*This onClick function is setup this way to pass the current option to delete*/}
            Remove Option
            </button>
        </div>
    );
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

ReactDOM.render(<IndecisionApp /> ,document.getElementById('app'));