import React, { useState, useEffect } from 'react';

import Note from './Note';

import axios from 'axios';

function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get('https://intense-atoll-08644.herokuapp.com/notes')
            .then(reponse => setNotes(reponse.data));
    }, [])

    return (
        <div className='container'>
            {
                notes.map(note => <Note key={note.id} title={note.title} content={note.content} date={note.date} color={note.color} />)
            }
        </div>
    )
}

export default Notes;