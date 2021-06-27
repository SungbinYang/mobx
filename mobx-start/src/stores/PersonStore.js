import { observable, makeObservable, computed } from "mobx";

export default class PersonStore {
  @observable
  name = "Sungbin";

  @observable
  age = 26;

  @computed
  get age10() {
    return Math.floor(this.age / 10) * 10;
  }

  constructor() {
    makeObservable(this);
  }

  plus() {
    this.age++;
  }
}
