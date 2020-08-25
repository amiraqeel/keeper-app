import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevState) => {
      return ({
        ...prevState,
        [name]: value
      });
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
      <form onSubmit={submitNote}>
        <input name="title" onChange={handleChange} placeholder="Title" value={note.title} />
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={note.content} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
