class Hero {
  constructor() {
    this.command = [];
  }

  execute(command) {
    this.command.push(command);
    command.execute();
  }
};

class Fly {
  constructor() { }

  on() {
    console.log('Start fly!');
  }

  off() {
    console.log('Finish fly!');
  }
}

class OnStartFly {
  constructor(action) {
    this.action = action;
  }

  execute() {
    this.action.on();
  }
}

class OnFinishFly {
  constructor(action) {
    this.action = action;
  }

  execute() {
    this.action.off();
  }
}

const fly = new Fly();
const start = new OnStartFly(fly);
const stop = new OnFinishFly(fly);
const hero = new Hero();

hero.execute(start);
hero.execute(stop);

hero.command.forEach(c => {
  c.execute();
});
