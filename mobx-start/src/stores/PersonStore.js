import { observable, makeObservable } from "mobx";

export default class PersonStore {
  @observable
  name = "Sungbin";

  @observable
  age = 26;

  constructor() {
    makeObservable(this);
  }

  plus() {
    this.age++;
  }
}
