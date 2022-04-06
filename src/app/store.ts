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
  return state;
}
