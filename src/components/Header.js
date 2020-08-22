import React from 'react';

import Menu from './Menu';
import Logo from './Logo';
import Search from './Search';

import '../assets/css/header.css';

const Header = () => {
    return (
        <div className='container'>
            <Menu />
            <Logo />
            <Search />
        </div>
    )
}


// // css in js

// const styles = {
//     container: {
//         maxWidth: 1400,
//         margin: '0 auto',
//         padding: '10px 0',
//         display: 'flex',
//         justifyContent: 'center',
//     }
// }
export default Header;