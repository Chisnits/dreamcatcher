import { Component, OnInit } from '@angular/core';
import { INote } from '../interfaces';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  public notes: INote[] = [];

  public addNote(note: INote) {
    this.notes.push(note);
  }

  public deleteNote(note: INote) {
    var index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
  }

  // TODO: add a button to the note component that will delete the note.
}
