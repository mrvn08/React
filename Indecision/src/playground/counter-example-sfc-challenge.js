//============================================
//Stateless Functional Components Challenge
//============================================

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    
    //Lifecycle Methods
    componentDidMount(){
        const count = parseInt(localStorage.getItem('count'), 10);
        if(!isNaN(count)){
            this.setState(() => ({ count }));
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }
    //--------------------------

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

