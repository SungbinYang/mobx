import { action, makeAutoObservable, observable } from "mobx";

export default class TodoStore {
  @observable
  todos = [];

  @action
  add(text) {
    this.todos.push({ text, done: false });
  }

  constructor() {
    makeAutoObservable(this);
  }
}
