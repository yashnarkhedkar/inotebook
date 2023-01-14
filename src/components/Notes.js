import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/NoteContext';
import NoteItem from './NoteItem'
import AddNote from './AddNote'

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes();
    }, [])
    

    return (
        <div>
            <AddNote/>
            <h2>All Notes</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes