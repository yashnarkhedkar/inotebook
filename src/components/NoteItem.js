import React from 'react'

const NoteItem = (props) => {
  const { title, description, tag } = props.note;
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button type="button" class="btn me-2 btn-outline-warning">Edit</button>
            <button type="button" class="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoteItem