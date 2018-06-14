import React from 'react';
import ReactDOM from 'react-dom';

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {/*props.content*/}
            {/*----Here's another way of doing it------*/}
            {props.children}
            <p>Footer</p>
        </div>
    );
};

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
);

//ReactDOM.render(<Layout content={template} /> ,document.getElementById('app'));
ReactDOM.render((
    <Layout>
        <div>
            <p>This is inline</p>
        </div>
    </Layout>
), document.getElementById('app'));

//This method is commonly seen used by third party modules
