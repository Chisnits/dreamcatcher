import { Injectable } from '@angular/core';
import { INote } from '../components/interfaces/note-interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  public async getNotes() {
    return [
      {
        title: 'Mah Test Note',
        body: 'This should show on load.'
      },
      {
        title: 'Another Test Note',
        body: 'This will also show on load.'
      }
  ]
  }

  public addNote(notes: INote[], note: INote) {
    return notes.push(note);
  }

  public deleteNote(notes: INote[], index: number) {
    return notes.splice(index, 1);
  }
}
