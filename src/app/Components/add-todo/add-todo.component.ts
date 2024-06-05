import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!: string;
  description!: string;
  @Output() todoAdd = new EventEmitter<Todo>();

  constructor(){

  }

  OnSubmit(){
    const todo = {
      sno: 7,
      title: this.title,
      description: this.description,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
