import React from "react";

function Notesitems(props) {
  const { note } = props;
  return (
    <div className="my-3 ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa fa-trash-o" ></i>
          <i className='far fa-edit mx-2'></i>
          
        </div>
      </div>
    </div>
  );
}

export default Notesitems;
