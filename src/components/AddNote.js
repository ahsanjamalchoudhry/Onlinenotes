import React,{useContext, useState} from "react";
import NoteContext from "../context/notes/noteContext";
import NoteState from "../context/notes/NoteState";

function AddNote() {
    const context = useContext(NoteContext);
    const {addnote } = context;
    const [note,setNote]=useState({title:"",description:"",tag:"default"})

    const handleclick=()=>{
        addnote(note.title,note.description,note.tag)
    }
    onchange=(e)=>{
        e.preventDefault();
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <div className="container md-3">
        <h1>Home Page</h1>
        <form>
          <div className="form-group ">
            <label htmlFor="exampleInputEmail1">TITLE</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              placeholder="TITLE" onChange={onchange}
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="Description">DESCRIPTION</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="DESCRIPTION" onChange={onchange}
            />
          </div>
          
          <button type="submit" className="btn btn-primary" onClick={handleclick}>
            Submit
          </button>
        </form>
        <h1>Your notes</h1>
      </div>
    </div>
  );
}

export default AddNote;
