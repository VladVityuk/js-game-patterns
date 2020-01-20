class Counter {
  constructor() {
    if (Counter.instance) {
      return Counter.instance;
    }

    this.count = 0;

    Counter.instance = this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    this.count++;
  }
}

const count1 = new Counter();
count1.increaseCount();

const count2 = new Counter();
count2.increaseCount();

console.log(count1.getCount());
console.log(count2.getCount());
