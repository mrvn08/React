//Creating react components
//Uppercase classes are a must in react components.

class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
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
    handlePick(){
        alert('HandlePick');
    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

//Challenge
class Options extends React.Component{
    handleRemoveAll(){
        alert("Eliminate!");
    }

    render(){
        const options = this.props.options;
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if(option){
            alert(option);
        }
        e.target.elements.option.value = "";
    }

    render(){
        return (
            <form onSubmit={this.handleAddOption}>
                <input name="option" type="text" placeholder="C'mooooon do it! DO IT NOW!"/>
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp /> ,document.getElementById('app'));