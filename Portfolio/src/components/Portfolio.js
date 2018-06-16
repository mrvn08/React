import React from 'react';
import { Link } from 'react-router-dom';

export default class Portfolio extends React.Component {
    state = {
        items: ['Project 1', 'Project 2', 'Project 3', 'Project 4']
    };

    render(){
        return (
            <div>
                <h5>Have a look and see!</h5>
                {
                    this.state.items.length > 0 ?
                    <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}><Link to={"portfolio/"+ item }>{item}</Link></li>    
                    ))}
                    </ul> : <p>Nothing to see here</p>
                }
            </div>
        );
    }
}

