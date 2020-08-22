import React from 'react';
import SearchIcon from '../assets/images/search.svg';

const Menu = () => {

    return (
        <div style={styles.search}>
            <div style={styles.searchButton}>
                <img src={SearchIcon} alt="" />
            </div>
        </div>
    )
}

const styles = {
    search: {
        width: 100,
    },
    searchButton: {
        width: 30,
        height: 30,
        backgroundColor: '#e6e6e6',
        borderRadius: '50%',
        padding: '5px'
    }
}

export default Menu;