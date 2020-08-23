import React from 'react';
import classNames from 'classnames';

import Menu from './Menu';
import Logo from './Logo';
import Search from './Search';

import { header } from '../assets/css/header.module.css';

const Header = () => {
    return (
        <div className={classNames(header, 'container')}>
            <Menu />
            <Logo />
            <Search />
        </div>
    )
}

export default Header;