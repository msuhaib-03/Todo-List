import { Component} from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[]  = [
      {sno: 1, title: 'First Todo', desc: 'This is the first todo', active: true},
      {sno: 2, title: 'Second Todo', desc: 'This is the second todo', active: true},
      {sno: 3, title: 'Third Todo', desc: 'This is the third todo', active: false}
    ]

    deleteTodo(todo: Todo){
      console.log("Todo deleted!", todo);
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    }
}
// All the logics and implementation of todo component is here..