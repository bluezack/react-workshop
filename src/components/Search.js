import React from 'react';
import SearchIcon from '../assets/images/search.svg';

import styles from 'assets/css/search.module.css'

const Menu = () => {

    return (
        <div className={styles.search}>
            <div className={styles.searchButton}>
                <img src={SearchIcon} alt="" className={styles.searchIcon} />
            </div>
        </div>
    )
}

export default Menu;