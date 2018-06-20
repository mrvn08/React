// Higher Order Components - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This information is private. Do not share </p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

//CHallenge- Require Authentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <WrappedComponent {...props}/>}
            {!props.isAuthenticated && <p>Please login to view info</p>}
        </div>
    )
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="Hello World" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Hello World" />, document.getElementById('app'));