import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext';

const NoteItem = (props) => {
  const { title, description } = props.note;    
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <i role="button" className="fa-sharp fa-solid pointer fa-trash mx-2" onClick={() => {deleteNote(note._id)}}></i>
            <i role="button" className="fa-solid fa-pen-to-square pointer mx-2" onClick={() => {updateNote(note)}}></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoteItem