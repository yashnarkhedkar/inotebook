import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5000';
  const intitalnotes = [];
  const [notes, setNotes] = useState(intitalnotes);


  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMmJiZjdlMGM5M2M0OWJmM2U0ZjlmIn0sImlhdCI6MTY3MzcwNjQ4N30.cytWaAqoABohL2rhZxgLMt_RSkNV-fTY7kYIFcmzlNM"
      },
    });
    const json = await response.json();
    setNotes(json)
  }

  const addNote = async (title, description) => {
    const response = await fetch(`${host}api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': ""
      },
      body: JSON.stringify({title, description})
    });
    const json = await response.json();

    const note = {
      "_id": "c1212292e8997a90644d81e6b24",
      "user": "63c1212707e1d3f8fc5d9d648f",
      "title": title,
      "description": description,
      "tag": "Personal",
      "date": "2023-01-14T11:32:56.522Z",
      "__v": 0
    }
    setNotes(notes.concat(note));
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => { return note._id != id })
    setNotes(newNotes);
  }

  const editNote = async (id, title, description) => {

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': ""
      },
      body: JSON.stringify(title, description)
    });
    const json = await response.json();

    for (let i = 0; i < notes.length; i++) {
      const ele = notes[i];
      if (ele._id === id) {
        ele.title = title;
        ele.description = description;
      }
    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;