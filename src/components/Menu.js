import React from 'react';

import MenuIcon from '../assets/images/menu.svg';

import styles from '../assets/css/menu.module.css';

const Menu = () => {
    return (
        <div className={styles.menuButton}>
            <img src={MenuIcon} alt="" className={styles.menuIcon} />
        </div>
    )
}

export default Menu;