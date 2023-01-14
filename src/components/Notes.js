import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext';
import NoteItem from './NoteItem'

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setnotes } = context;

    return (
        <div>
            <h2>All Notes</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {notes.map((note) => {
                    return <NoteItem note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes