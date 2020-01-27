import { Injectable } from '@angular/core';
import { INote } from '../components/interfaces/note-interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  // public notes: INote[] = [];

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

  // public addNote(note: INote) {
  //   this.notes.push(note);
  // }

  // public deleteNote(index: number): void {
  //   this.notes.splice(index, 1);
  // }
}
