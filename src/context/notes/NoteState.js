// import React, { useState } from "react";
import { useState } from "react";
import NoteContext from "./noteContext";
import Notes from "../../components/Notes";

const NoteState = (props) => {
 const initialnotes=[
    {
      "_id": "64d49929b64ba2243152f3ad1",
      "user": "64d498e4b64ba243152f3acd",
      "title": "TITLE OF THE NOTES",
      "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly ",
      "tag": "General",
      "date": "1691654290311",
      "__v": 0
    },
    {
      "_id": "64d499e9b64ba3243152f3aed",
      "user": "64d498e4b64ba243152f3acd",
      "title": "TITLE OF THE NOTES",
      "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly ",
      "tag": "General",
      "date": "1691654290311",
      "__v": 0
    },
    {
      "_id": "64d6044a7ead126ef3c296c81c",
      "user": "64d498e4b64ba243152f3acd",
      "title": "TITLE OF THE NOTES",
      "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly ",
      "tag": "General",
      "date": "1691747293820",
      "__v": 0
    },
    {
      "_id": "64d60444a7ead6ef3c2976c81c",
      "user": "64d498e4b64ba243152f3acd",
      "title": "TITLE OF THE NOTES",
      "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly ",
      "tag": "General",
      "date": "1691747293820",
      "__v": 0
    },
    {
      "_id": "64d6044a7e4a5d6ef3c296c81c",
      "user": "64d498e4b64ba243152f3acd",
      "title": "TITLE OF THE NOTES",
      "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly ",
      "tag": "General",
      "date": "1691747293820",
      "__v": 0
    },
    {
      "_id": "64d6044a7ead64ef33c296c81c",
      "user": "64d498e4b64ba243152f3acd",
      "title": "TITLE OF THE NOTES",
      "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly ",
      "tag": "General",
      "date": "1691747293820",
      "__v": 0
    }
  ]
  const  [notes,setNotes]=useState(initialnotes)

  // Add notes 
  const addNote = (title, description, tag) => {
    console.log("adding a new note")
    const note = {
      "_id": "64d6044a7ead6ef33c296c81c",
      "user": "64d498e4b64ba243152f3acd",
      "title": "TITLE OF THE NOTES",
      "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly[edit] ",
      "tag": "General",
      "date": "1691747293820",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }
  // delete notes
  const deleteNote=()=>{

  }
  // Edit notes
  const editNote=()=>{

  }
  return (
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
