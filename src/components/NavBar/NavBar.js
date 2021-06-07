import React from 'react';
import './NavBar.scss';

const NavBar = () => (
    <div className="NavBar">
        <a className="active" href="/">Home</a>
        <a href="/config">Config</a>
    </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
