
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
    const host="http://localhost:5000"

    const notesInitial=[]


    // Add a Note
    const addNote=async(title, description, tag)=>{
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZGU0ZDZiYTJjZGU5NjAwNzc0NTc1In0sImlhdCI6MTYzMjg0NzY0N30.qh7PHd_bECmyNoglQQqJ0D01oHcNdQ8zOoVESS-mmxc"
            },
            body: JSON.stringify({title, description, tag})
          });
          const json= await response.json();

        // API Calling
        let note = {
            "_id": json._id,
            "user": json.user,
            "title": title,
            "description": description,
            "tag": tag,
            "date": json.date,
            "__v": 0
          }
          console.log("Adding a new note");
          setNotes(notes.concat(note))

    }
    const getNotes=async()=>{
        // Calling the API
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZGU0ZDZiYTJjZGU5NjAwNzc0NTc1In0sImlhdCI6MTYzMjg0NzY0N30.qh7PHd_bECmyNoglQQqJ0D01oHcNdQ8zOoVESS-mmxc"
            },
          });
          const json= await response.json();
          console.log(json);
          setNotes(json)

    }


    // Delete a Note
    const deleteNote=async(id)=>{
        // API Calling
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZGU0ZDZiYTJjZGU5NjAwNzc0NTc1In0sImlhdCI6MTYzMjg0NzY0N30.qh7PHd_bECmyNoglQQqJ0D01oHcNdQ8zOoVESS-mmxc"
            }
          });
          const json= await response.json();
          console.log(json)


        console.log("Deleting with id "+id);
        const newNotes=notes.filter((note)=>{ return note._id!==id})
        setNotes(newNotes)
    }


    //Edit a Note
    const editNote=async(id, title, description, tag)=>{
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZGU0ZDZiYTJjZGU5NjAwNzc0NTc1In0sImlhdCI6MTYzMjg0NzY0N30.qh7PHd_bECmyNoglQQqJ0D01oHcNdQ8zOoVESS-mmxc"
            },
            body: JSON.stringify({title, description, tag})
          });
          const json= await response.json();
        //TODO: API CAlling for editiing
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id===id) {
                element.title=title;
                element.description=description;
                element.tag=tag;
            }

        }
    }

    const [notes, setNotes] = useState(notesInitial)
    return (
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
