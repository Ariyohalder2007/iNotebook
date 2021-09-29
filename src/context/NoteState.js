
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{

    const notesInitial=[
        {
            "_id": "615427672ba95d3c7c00c38c",
            "user": "614de4d6ba2cde9600774575",
            "title": "TestNote2",
            "description": "This is a test note",
            "tag": "test",
            "date": "2021-09-29T08:44:23.337Z",
            "__v": 0
          },
          {
            "_id": "6154276b2ba95d3c7c00c38e",
            "user": "614de4d6ba2cde9600774575",
            "title": "TestNote3",
            "description": "This is a test note",
            "tag": "test",
            "date": "2021-09-29T08:44:27.401Z",
            "__v": 0
          }
    ]
    const [notes, setNotes] = useState(notesInitial)
    return (
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
