import React from 'react';
import Sobre from '../objects/Sobre';
import Logo from '../objects/Logo';
import Menu from '../objects/Menu';
import './index.css';

const Header = () => {
    return (
    <div className="header">
        <Logo className="header-logo"/>
        <Sobre />
        <Menu />
    </div>
    )
}

export default Header;