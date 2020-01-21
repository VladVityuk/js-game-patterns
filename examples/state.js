class State {
  constructor(name, nextState) {
    this.name = name;
    this.nextState = nextState;
  }

  next() {
    return new this.nextState();
  }
}

class Jump extends State {
  constructor() {
    super('jump', Run);
  }
}

class Run extends State {
  constructor() {
    super('run', Idle);
  }
}

class Idle extends State {
  constructor() {
    super('idle', Idle);
  }
}

class Player {
  constructor() {
    this.state = new Jump();
  }

  setState(state = new Idle()) {
    this.state = state;
  }

  nextState() {
    console.log(this.state);
    this.state = this.state.next();
  }
}

const player = new Player();
player.nextState();
player.nextState();
player.nextState();
player.setState(new Jump());
player.nextState();
player.nextState();
player.nextState();
