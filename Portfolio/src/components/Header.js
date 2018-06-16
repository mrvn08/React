import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <div>
            <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
            <NavLink to="/portfolio" activeClassName="is-active" exact>My Work</NavLink>
            <NavLink to="/contact" activeClassName="is-active">Get in Touch</NavLink>
        </div>
    </header>
);

export default Header;
