import React, { useContext, useState } from "react";
import noteContext from "../context/noteContext";

function AddNote() {
    const context=useContext(noteContext);
    // eslint-disable-next-line
    const { addNote}=context;
    const [note, setNote] = useState({title:"", description:"", tag:""})
    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
    }

    const onChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            typeof="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            typeof="text"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            typeof="text"
            onChange={onChange}
          />
        </div>

        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Add
        </button>
      </form>
        </div>
    )
}

export default AddNote
