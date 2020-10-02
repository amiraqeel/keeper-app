import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [active, setActive] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevState) => {
      return ({
        ...prevState,
        [name]: value
      });
    });
  }

  function handleFocus() {
    setActive((prev) => {
      return !prev;
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.getNote(note);
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>

      <form onSubmit={submitNote} className="create-note">
        {active && <input name="title" onChange={handleChange} placeholder="Title" value={note.title} autoComplete="off" />}
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows={active ? 3 : 1} value={note.content} onClick={handleFocus} />
        {active && <Zoom in={active}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>}
      </form>

    </div>
  );
}

export default CreateArea;
