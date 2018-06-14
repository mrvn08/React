//remake with babel transform class properties
import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    
    //Component Properties
    state = {
        options: [],
        selectedOption: undefined
    };

    //Event Handlers
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    
    handleDeleteOption = (optionToDelete) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToDelete)
        }));
    }

    handlePick = () => {
        const randomNum =  Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option}));
    }

    handleAddOption = (newOption) => {
        if(!newOption){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(newOption) > -1){
            return 'Option already exists';
        } 
        this.setState((prevState) => ({options: prevState.options.concat(newOption)}));
    }

    //React Component Life Cycle Methods
    //Note that lifecycle methods and render is left alone.
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }));
            }
        } catch(e){
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
    }

    componentWillUnmount(){
        console.log('Component will unmount');
    }

    render(){
        const title = "Indecision App"; 
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions = {this.state.options.length > 0}
                        handlePick = {this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options = {this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption} 
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div> 
        );
    }
}
