import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({title : "", description : "", tag : ""})

    const onChange = (e) => {
        setNote({...note, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description);
    }
    return (
        <div className="container my-3">
            <h2>Add a note</h2>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Enter your Title here *</label>
                <input type="text" className="form-control" id="title" name="title" onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description *</label>
                <textarea className="form-control" id="description" name="description" rows="3" onChange={onChange}></textarea>
            </div>
            <button type="submit" className="btn btn-success" onClick={handleSubmit} >Add Note</button>
        </div>
    )
}

export default AddNote