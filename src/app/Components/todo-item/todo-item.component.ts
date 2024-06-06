import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem! : Todo;
  @Output() todoDelete = new EventEmitter<Todo>();
  @Output() activeTodo = new EventEmitter<Todo>();

  OnDeleteButtonClick(todo:Todo){
    this.todoDelete.emit(todo);
  }

  OnCheckboxClick(){
    // this.todoItem.active = ! this.todoItem.active;
    this.activeTodo.emit(this.todoItem);
  }
}
