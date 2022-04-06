import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { REMOVE_ALL_TODOS } from '../action';
import { ITodo } from '../interfaces/todo';
import { IAppState } from '../store';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.scss']
})
export class TodoOverviewComponent implements OnInit {
  @select() todos: any;
  @select() lastUpdate: any;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
  }

  clearTodos(){
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS});
  }

}
