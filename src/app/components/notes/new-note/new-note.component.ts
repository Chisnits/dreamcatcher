import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { INote } from '../../interfaces';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  @Output() public saved = new EventEmitter<INote>(); 

  
  public save() {
    const note: INote = {
      title: 'Hey I work',
      body: 'I am the new note'
    };

    this.saved.emit(note);
  }
}
