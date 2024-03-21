package com.example.noteapp.controllers;

import com.example.noteapp.error.NoteNotFoundException;
import com.example.noteapp.models.Note;
import com.example.noteapp.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class NoteController {
    final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping("/notes")
    public Note createNote(@RequestBody Note note){
        System.out.println(note.toString());
        return noteService.createNote(note);
    }


    @GetMapping("/notes")
    public ResponseEntity<List<Note>> getAllNotes() {
        var body = noteService.getAllNotes();

        return ResponseEntity.ok()
                .body(body);
    }


    @GetMapping("/notes/{id}")
    public Note getNote(@PathVariable Long id) throws NoteNotFoundException {
        return noteService.getNote(id);
    }


    @DeleteMapping("/notes/{id}")
    public void deleteNote(@PathVariable Long id) throws NoteNotFoundException {
        noteService.deleteNoteById(id);
    }


    @PutMapping("/notes/{id}")
    public Note editNote(@PathVariable Long id, @RequestBody Note note) throws NoteNotFoundException {
        return noteService.editNoteById(id, note);
    }

}
