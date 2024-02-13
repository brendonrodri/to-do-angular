import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotesModule } from './pages/notes/notes.module';
import { FormModule } from './components/form/form.module';
import { ButtonModule } from './components/button/button.module';
import { TaskModule } from './pages/task/task.module';
import { OptionsModalComponent } from './components/options-modal/options-modal.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskCardModule } from './components/task-card/task-card.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TaskModule,
    NotesModule,
    FormModule,
    ButtonModule,
    TaskCardModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
