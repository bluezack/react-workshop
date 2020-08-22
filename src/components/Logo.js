import React from 'react';

const Logo = () => {

    return (
        <div style={styles.logo}>
            <h2 style={{ margin: 0 }}>Noty</h2>
        </div>
    )
}

const styles = {
    logo: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

export default Logo;