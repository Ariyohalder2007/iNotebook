
import React, { useContext } from "react";
import noteContext from "../context/noteContext";
import NoteItem from "./NoteItem";


function Notes() {
    const context=useContext(noteContext);
    // eslint-disable-next-line
    const {notes, setNotes}=context;

    return (
        <div>
            <h1>Your Notes, Secrets?</h1>
            <div className="row">
                {notes.map((note)=>{return <NoteItem note = {note}/>})}
            </div>
        </div>
    )
}

export default Notes
