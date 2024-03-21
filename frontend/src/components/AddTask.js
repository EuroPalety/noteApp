import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a note");
      return;
    }

    onAdd({ title, text });

    setTitle("");
    setText("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          placeholder="Add Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="Add Description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="Save Note"
        className="btn btn-block"
      />
    </form>
  );
};

export default AddTask;
