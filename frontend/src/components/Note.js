import React from "react";
import { FaTimes, FaRegEdit } from "react-icons/fa";

const Note = ({ note, onDelete, onEdit }) => {
  return (
    <div className="task">
      <h3>
        {note.title}

        {/*<FaRegEdit*/}
        {/*  style={{*/}
        {/*    color: "steelblue",*/}
        {/*    cursor: "pointer",*/}
        {/*    border: "none",*/}
        {/*    display: "-ms-inline-flexbox",*/}
        {/*  }}*/}
        {/*  onClick={() => onEdit(note.id)}*/}
        {/*/>*/}

        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
            display: "inline-block",
          }}
          onClick={() => onDelete(note.id)}
        />
      </h3>
      <p>{note.text}</p>
    </div>
  );
};

export default Note;
