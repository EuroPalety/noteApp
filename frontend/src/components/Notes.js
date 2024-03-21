import React from "react";
import Note from "./Note";
import { useState } from "react";

const Notes = ({ notes, onDelete, onEdit }) => {
  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </>
  );
};

export default Notes;
