import { Component, Inject, Input} from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem: string | null | undefined;
  todos: Todo[]  = [
      // {sno: 1, title: 'First Todo', desc: 'This is the first todo', active: true},
      // {sno: 2, title: 'Second Todo', desc: 'This is the second todo', active: true},
      // {sno: 3, title: 'Third Todo', desc: 'This is the third todo', active: false}
    ]
  isBrowser: boolean;
    constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const localItem = localStorage.getItem('todos');
      this.todos = localItem ? JSON.parse(localItem) : [];
    }
  }

  toggleTodo(todo: Todo) {
    this.todos[this.todos.indexOf(todo)].active = !this.todos[this.todos.indexOf(todo)].active;
    if (this.isBrowser) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
    if (this.isBrowser) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    if (this.isBrowser) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    // deleteTodo(todo: Todo){
    //   console.log("Todo deleted!", todo);
    //   const index = this.todos.indexOf(todo);
    //   this.todos.splice(index, 1);
    //   localStorage.setItem("todos", JSON.stringify(this.todos));
    // }
    // addTodo(todo: Todo){
    //   console.log("Todo added!", todo);
    //   this.todos.push(todo);
    //   localStorage.setItem("todos", JSON.stringify(this.todos));
    // }
}
// All the logics and implementation of todo component is here..
}