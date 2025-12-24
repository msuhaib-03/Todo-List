import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input({required: true}) 
  todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Click has been triggered!");
  }
  constructor() { }
}
