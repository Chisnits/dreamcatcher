import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { INote } from '../../interfaces';
import { NewNoteState } from '../enumerations/index';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  @Output() public saved = new EventEmitter<INote>(); 
  public state: NewNoteState = NewNoteState.NotActive;


  
  public save(note) {
    this.saved.emit(note);
  }
}
