
import React, { useContext } from "react";
import noteContext from "../context/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";


function Notes() {
    const context=useContext(noteContext);
    // eslint-disable-next-line
    const {notes}=context;

    return (
        <>
        <AddNote/>
        <div>
            <h1 className="my-2">Your Notes, Secrets?</h1>
            <div className="row">
                {notes.map((note)=>{return <NoteItem key={note._id} note = {note}/>})}
            </div>
        </div>
        </>
    )
}

export default Notes
