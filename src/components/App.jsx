import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [notes,setNotes]=useState([])
  function handleAdd(note){
    setNotes(preValue=>{
      return [...preValue,note]
    })
  }
  function deleteNote(id){
    setNotes(preValue=>{
      return notes.filter((note,index)=>{
        return id!==index;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd}/>
      {notes.map((note,index)=>{
        return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
