import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { INote } from '../interfaces';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  public notes: INote[] = [];

  constructor(private NotesService: NotesService) {}

  ngOnInit() {
    this.getAllNotes();
  }
  
  public async addNote(note: INote) {
    return await this.NotesService.addNote(this.notes, note);
  }

  public async deleteNote(index: number): Promise<INote[]> {
    return await this.NotesService.deleteNote(this.notes, index);

    // peformance concerns with rerendering the entire view. -> trackBy -> Index
    // Reflow -> steps to recalculate -> janking -> missing frames.
  }

  public async getAllNotes(): Promise<INote[]> {
    return this.notes = await this.NotesService.getNotes();
  }


  //TODO: Create a notes service, inject into the container, define and interface for the service.
  //interface INoteService{//CRUD delete(), getAll()}
  //Create the service and register it in the module.
  //the noteService should be private.
  //async ngOnInit() {
    // await get notes
  // }
}
