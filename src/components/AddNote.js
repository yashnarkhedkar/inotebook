import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../css/center.css"

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "" })
    const notify = () => {
        toast.success('Note Added', {
            position: "bottom-center",
            autoClose: 100,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description);
        setNote({ title: "", description: "" })
        notify();
    }
    return (
        <div className="container my-3">
            <h2>Add a note</h2>
            <form className='my-3' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title<span className='red'>*</span></label>
                    <input type="text" className="form-control" value={note.title} id="title" name="title" onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description<span className='red'>*</span></label>
                    <textarea className="form-control" id="description" value={note.description} name="description" rows="3" onChange={onChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-success">Add Note</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default AddNote