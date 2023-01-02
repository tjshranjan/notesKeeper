import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function Note(props) {
  function handleClickOnDelete(){
    const id=props.id;
    props.onDelete(id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
      onClick={handleClickOnDelete}
      ><DeleteForeverIcon/></button>
    </div>
  );
}

export default Note;
