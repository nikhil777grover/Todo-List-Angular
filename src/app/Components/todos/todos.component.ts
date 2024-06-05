import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent{
  todos : Todo[]
  constructor()
  {
    this.todos = [
      {
        sno : 1,
        title : "Title 1",
        description : "Description 1",
        active : false
      },
      {
        sno : 2,
        title : "Title 2",
        description : "Description 2",
        active : false
      },
      {
        sno : 3,
        title : "Title 3",
        description : "Description 3",
        active : false
      }
    ]
  }

  DeleteSelectedTodo(todoitem: Todo)
  {
    console.log("Delete Item:",todoitem);
    const index = this.todos.indexOf(todoitem);
    this.todos.splice(index,1);
  }
}
