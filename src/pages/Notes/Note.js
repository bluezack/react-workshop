import React from 'react'

import moment from 'moment'
import styles from 'assets/css/note.module.css';

const Note = (props) => {

    const defaultColor = "#fcd392";
    return (
        <div className={styles.noteContainer} >
            <div className={styles.note} style={{ background: props.color || defaultColor }}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.content}>
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                </p>
                <div className={styles.metadata}>
                    <span>{moment(props.date).format('MMMM DD, YYYY')}</span>
                </div>
            </div>
        </div>
    )

}

export default Note;

