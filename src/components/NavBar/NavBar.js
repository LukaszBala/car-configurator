import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.scss';

const NavBar = () => (
    <div className="NavBar">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
