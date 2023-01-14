import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const intitalnotes = [
    {
      "_id": "63c292e7997a90644d81e6b0",
      "user": "63c12707e1d3f8fc5d9d648f",
      "title": "My title",
      "description": "abcdef sadasdadasda",
      "tag": "Personal",
      "date": "2023-01-14T11:32:55.197Z",
      "__v": 0
    },
    {
      "_id": "63c292e7997a90644d81e6b0",
      "user": "63c12707e1d3f8fc5d9d648f",
      "title": "My title",
      "description": "abcdef sadasdadasda",
      "tag": "Personal",
      "date": "2023-01-14T11:32:55.197Z",
      "__v": 0
    },
    {
      "_id": "63c292e7997a90644d81e6b0",
      "user": "63c12707e1d3f8fc5d9d648f",
      "title": "My title",
      "description": "abcdef sadasdadasda",
      "tag": "Personal",
      "date": "2023-01-14T11:32:55.197Z",
      "__v": 0
    },
    {
      "_id": "63c292e7997a90644d81e6b0",
      "user": "63c12707e1d3f8fc5d9d648f",
      "title": "My title",
      "description": "abcdef sadasdadasda",
      "tag": "Personal",
      "date": "2023-01-14T11:32:55.197Z",
      "__v": 0
    },
    {
      "_id": "63c292e8997a90644d81e6b2",
      "user": "63c12707e1d3f8fc5d9d648f",
      "title": "My title 2",
      "description": "abcdef sadasdadasda",
      "tag": "Personal",
      "date": "2023-01-14T11:32:56.522Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(intitalnotes);
  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;