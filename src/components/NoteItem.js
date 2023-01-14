import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext';

const NoteItem = (props) => {
  const { title, description, tag } = props.note;    
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <i role="button" className="fa-sharp fa-solid pointer fa-trash mx-2" onClick={() => {deleteNote(props.note._id)}}></i>
            <i role="button" className="fa-solid fa-pen-to-square pointer mx-2"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoteItem