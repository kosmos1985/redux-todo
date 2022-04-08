import { ADD_TODO, REMOVE_ALL_TODOS, REMOVE_TODO, TOGGLE_TODO } from './action';
import { ITodo } from './interfaces/todo';

export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date | null;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null,
};

export function rootReducer(state: any, action: any) {
  switch (action.type) {
    case ADD_TODO:
      action.todo.id = state.todos.length + 1;
      return Object.assign({}, state, {
        todos: state.todos.concat(Object.assign({}, action.todo)),
        lastUpdate: new Date(),
      });
    case TOGGLE_TODO:
      let todo = state.todos.find((todo: { id: any }) => todo.id === action.id);
      let index = state.todos.indexOf(todo);
      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, index),
          Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
          ...state.todos.slice(index + 1),
        ],
        lastUpdate: new Date(),
      });

    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter((todo: { id: any }) => todo.id !== action.id),
        lastUpdate: new Date(),
      });

    case REMOVE_ALL_TODOS:
      return Object.assign({}, state, {
        todos: [],
        lastUpdate: new Date(),
      });
  }
  return state;
}
