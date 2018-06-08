//============================================
//Creating component state
//============================================

//Step 1
//- Declare this.state as object with the values you want in it in the constructor

//Step 2
//- Ouput default state via JSX

//Step 3
//- Make changes to state via events via this.setState
//- You can get the previous state by stating an argument in the setState function
/*
    this.setState((prevState) => {
        return {
            someProp: <Make some changes>,
            anotherProp: <Make more changes>
        };
    });
*/
//----Alternative----
// Note that this does not have access to the previous state like the one above
// Also this method could be deprecated in the future
/*
    this.setState({
        someProp: <Make some changes>,
        anotherProp: <Make more changes>
    });
*/


class Counter extends React.Component {
    constructor(prop){
        super(prop);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne(){
        this.setState((someName) => {
            return {
                count: someName.count -1
            };
        });
    }

    handleReset(){
        //Does a batch job
        this.setState(() => {
            return {
                count: 0
            };
        });
        //Prev state takes in the result from the previous setState
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count + 1
        //     };
        // });

        // Processes here are asynchronous so it will end up only adding +1
        // this.setState({
        //     count: 0
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

//Create 3 methods.

ReactDOM.render(<Counter />, document.getElementById('app'));

