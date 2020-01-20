class SuperHero {
  constructor() {
    this.canFly = false;
    this.haveSuperPower = false;
    this.isBillionaire = false;
    this.name = 'unknown';
  }
}

class Builder {
  constructor() {
    this.hero = new SuperHero();
  }

  addFly() {
    this.hero.canFly = true;

    return this;
  }

  addSuperPower() {
    this.hero.haveSuperPower = true;

    return this;
  }

  giveMoney() {
    this.hero.isBillionaire = true;

    return this;
  }

  addName(name) {
    this.hero.name = name;

    return this;
  }

  getHero() {
    return this.hero;
  }
}

class Director {
  constructor() {
    this.builder = new Builder();
    this.hero = this.builder.getHero();
  }

  madeIronMan() {
    this.builder.addFly();
    this.builder.giveMoney();
    this.builder.addName('Iron Man');

    return this.builder;
  }

  madeSuperMan() {
    this.builder.addFly();
    this.builder.addSuperPower();
    this.builder.addName('Superman');

    return this.builder;
  }
}

const superman = new Director().madeSuperMan();
const ironMan = new Director().madeIronMan();
const batman = new Builder()
  .addFly()
  .addSuperPower()
  .giveMoney()
  .addName('Batman');

console.table(superman);
console.table(ironMan);
console.table(batman);

