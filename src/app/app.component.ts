import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list-app';
  constructor() { 
  //   setTimeout(() => {
  //     this.title = 'Title Changed!';
  //   }, 2000);
   }
}

// How this module works is here.. 

