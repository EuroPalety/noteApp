import React from "react";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Notes from "./components/Notes";
import AddTask from "./components/AddTask";

function App() {
  const [showEditNote, setShowEditNote] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const notesFromServer = await fetchNotes();
      setNotes(notesFromServer);
    };

    getNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await fetch("http://localhost:8080/notes");
    const data = await res.json();

    return data;
  };

  const deleteNote = async (id) => {
    await fetch("http://localhost:8080/notes/" + id, { method: "DELETE" });

    setNotes(notes.filter((note) => note.id !== id));
  };

  const addNote = async (note) => {
    const res = await fetch("http://localhost:8080/notes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(note),
    });

    const data = await res.json();

    setNotes([...notes, data]);
  };

  const editNote = async (id, note) => {
    const res = await fetch("http://localhost:8080/notes" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(note),
    });

    const data = await res.json();

    setNotes([...notes, data]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddNote(!showAddNote)}
        showAdd={showAddNote}
      />
      {showAddNote && <AddTask onAdd={addNote} />}
      <Notes notes={notes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  );
}

export default App;
