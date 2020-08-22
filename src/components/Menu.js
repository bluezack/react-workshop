import React from 'react';

import MenuIcon from '../assets/images/menu.svg';

const Menu = () => {

    return (
        <div style={styles.menu}>
            <img src={MenuIcon} alt="" style={styles.menuButton} />

        </div>
    )
}

const styles = {
    menuButton: {
        width: 30,
        height: 30
    },

    menu: {
        width: 100,
    },
}

export default Menu;