import { NgRedux, select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { REMOVE_ALL_TODOS } from '../action';
import { ITodo } from '../interfaces/todo';
import { IAppState } from '../store';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.scss']
})
export class TodoOverviewComponent implements OnInit, OnDestroy {
  @select() todos: any;
  @select() lastUpdate: any;
  private subscription = new Subscription();
  resonseLength!: number;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    const sub = this.todos.subscribe((res: any)=>{
      this.resonseLength = res.length
  })
    this.subscription.add(sub);
    
  }

  clearTodos(){
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS});
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
