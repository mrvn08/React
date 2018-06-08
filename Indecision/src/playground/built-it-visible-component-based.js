class VisibilityToggle extends React.Component {
    constructor(prop){
        super(prop);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return { 
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && <p>Now you see me!!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));