import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input({required: true}) 
  todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Click has been triggered!");
  }
  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
    console.log("Checkbox click has been triggered!");
  }
  constructor() { }
}
