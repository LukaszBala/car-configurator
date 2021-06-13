import React from 'react';
import './NavBar.scss';

const NavBar = () => {

    function active(current) {
        let url = window.location.href.split('/');
        url = url[url.length - 1];
        return url === current ? 'active' : null;
    }
    return (
    <div className="NavBar">
        <a className={active('')} href="/">Home</a>
        <a className={active('config')} href="/config">Config</a>
        <a className={active('compare')} href="/compare">Compare</a>
        {}
    </div>
)};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
