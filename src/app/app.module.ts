import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotesModule } from './pages/notes/notes.module';
import { FormModule } from './components/form/form.module';
import { ButtonModule } from './components/button/button.module';
import { TaskModule } from './pages/task/task.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
