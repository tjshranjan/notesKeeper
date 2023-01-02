import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [note,setNote]=useState({
    title:"",
    content:""
  })
  function handleChange(event){
    const {name,value}=event.target;
    setNote(preValue=>{
      return {
        ...preValue,
        [name]:value
      }
    })
  }
  function handleClickOnAdd(e){
    props.onAdd(note);
    e.preventDefault();
    setNote({
      title:"",
      content:""
    })
    setExtended(false);
  }
  const [isExtended,setExtended]=useState(false);
  function handleClickInTextArea(){
    setExtended(true);
  }
  return (
    <div>
      <form>
        {isExtended && <input name="title" 
        onChange={handleChange} 
        placeholder="Title" 
        value={note.title}
        />}

        <textarea name="content" 
        onClick={handleClickInTextArea}
        onChange={handleChange} 
        placeholder="Take a note..." 
        rows={isExtended ? 3:1} 
        value={note.content}
        />
        {isExtended && <Zoom in={true}>
          <button onClick={handleClickOnAdd}><AddIcon/></button>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
