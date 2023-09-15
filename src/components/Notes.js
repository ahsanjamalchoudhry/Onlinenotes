import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import Notesitems from "./Notesitems";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, addnote } = context;
  return (
    <>
      <AddNote />
      <div className="row my-3">
        {notes &&
          notes.map((note) => (
            <div key={note.id} className="col-md-4">
              <Notesitems note={note} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Notes;
