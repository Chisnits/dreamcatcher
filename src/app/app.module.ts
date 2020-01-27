import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { NewNoteComponent } from './components/notes/new-note/new-note.component';
import { NoteItemComponent } from './components/notes/note-item/note-item.component';
import { NotesService } from './services/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NewNoteComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
