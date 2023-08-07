import {
  action,
  makeObservable,
  observable,
  computed,
  autorun,
  runInAction,
} from "mobx";

class Cats {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      addCat: action,
      deleteCat: action,
      count: computed,
      loadInitialKitties: action
    });

    autorun(() => this.log());
    runInAction(() => this.loadInitialKitties());
  }

  addCat(url) {
    const id = this.data.length + 1;
    this.data.push({ url, id });
  }

  deleteCat(id) {
    this.data = this.data.filter((cat) => cat.id !== id);
  }

  get count() {
    return this.data.length;
  }

  log() {
    console.log(`Котики: ${this.data.map((cat) => cat.url).join(",")}`);
  }

  async loadInitialKitties() {
    const response = await fetch(`https://cataas.com/api/cats?skip=0&limit=30`);
    const data = await response.json();

    this.data = data.map((cat, id) => {
      const text = cat.owner + cat.tags.join(",") + id;
      const url = `https://cataas.com/cat/says/${text}`;

      return { url, id };
    });
  }
}

const cats = new Cats();

export default cats;
