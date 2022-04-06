import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../action';
import { ITodo } from '../interfaces/todo';
import { IAppState } from '../store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @select() todos: any;

  model: ITodo = {
    id: 0,
    description: "",
    responsible:"",
    priority:"",
    isCompleted: false
  }

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
  }

  toogleTodo(todo: { id: number; }){
    this.ngRedux.dispatch({type: TOGGLE_TODO, id: todo.id});
  }

  removeTodo(todo: { id: number; }){
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id});
  }

}
