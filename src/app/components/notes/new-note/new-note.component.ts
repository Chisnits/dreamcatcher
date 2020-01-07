import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { INote } from '../../interfaces';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  @Output() public saved = new EventEmitter<INote>(); 

  
  public save(note) {
    console.log(note);
    this.saved.emit(note);
  }
}
