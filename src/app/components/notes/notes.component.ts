import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { INote } from '../interfaces';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  public notes: INote[] = [];

  public addNote(note: INote) {
    this.notes.push(note);
  }

  public deleteNote(index): void {
    this.notes.splice(index, 1);

    // peformance concerns with rerendering the entire view. -> trackBy -> Index
    // Reflow -> steps to recalculate -> janking -> missing frames.
  }


  //TODO: Create a notes service, inject into the container, define and interface for the service.
  //interface INoteService{//CRUD delete(), getAll()}
  //Create the service and register it in the module.
  //the noteService should be private.
  //async ngOnInit() {
    // await get notes
  // }
}
