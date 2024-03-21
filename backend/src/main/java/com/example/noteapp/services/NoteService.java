package com.example.noteapp.services;

import com.example.noteapp.error.NoteNotFoundException;
import com.example.noteapp.models.Note;
import com.example.noteapp.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Objects;

@Service
public class NoteService {

    final NoteRepository noteRepository;

    @Autowired
    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public Note createNote(Note note) {
        return noteRepository.save(note);
    }

    public Note getNote(Long id) throws NoteNotFoundException {
        if(noteRepository.existsById(id)) return noteRepository.findById(id).get();
        else throw new NoteNotFoundException("Note not found!");
    }

    public void deleteNoteById(Long id) throws NoteNotFoundException {
        if(noteRepository.existsById(id)) noteRepository.deleteById(id);
        else throw new NoteNotFoundException("Note not found!");
    }

    public Note editNoteById(Long id, Note note) throws NoteNotFoundException {

        if (noteRepository.existsById(id)) {
            Note noteDb = noteRepository.findById(id).get();
            if(Objects.nonNull(note.getTitle())){
                noteDb.setTitle(note.getTitle());
            }

            if(Objects.nonNull(note.getText())){
                noteDb.setText(note.getText());
            }

            return noteRepository.save(noteDb);
        }
        else throw new NoteNotFoundException("Note not found!");
    }

    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }
}
