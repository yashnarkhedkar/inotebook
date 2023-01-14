import React from 'react'
import Notes from './Notes';

const Home = () => {
  return (
    <>
      <div className="container my-3">
        <h2>Add a note</h2>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Enter your Title here *</label>
          <input type="text" class="form-control" id="title"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Description *</label>
          <textarea class="form-control" id="description" rows="3"></textarea>
        </div>
      </div>
      <Notes/>
    </>
  )
}

export default Home