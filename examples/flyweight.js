class BaseUnit {
  constructor() {
    this.nation = null;
    this.attack = null;
    this.x = null;
    this.y = null;
    this.id = null;
  }

  displayStates() {
    console.log(this);
  }
}

class Elf extends BaseUnit {
  constructor() {
    super();

    this.nation = 'Elves';
    this.attack = 150;
  }
}

class Orc extends BaseUnit {
  constructor() {
    super();

    this.nation = 'Orcs';
    this.attack = 50;
  }
}

class Dwarf extends BaseUnit {
  constructor() {
    super();

    this.nation = 'Dwarfs';
    this.attack = 100;
  }
}

class UnitsFactory {
  constructor() {
    this.nations = {};
  }

  create(name) {
    let nation = this.nations[name];

    if (nation) {
      return nation;
    }

    this.nations[name] = this.getNation(name);
    return this.nations[name];
  }

  getNation(name) {
    switch (name) {
      case 'Elves':
        return new Elf();
      case 'Orcs':
        return new Orc();
      case 'Dwarfs':
        return new Dwarf();
    }
  }
}

const nations = ['Orcs', 'Elves', 'Dwarfs', 'Elves', 'Orcs', 'Dwarfs', 'Dwarfs'];
let id = 0;
let x = 0;
let y = 0;

const unitsFactory = new UnitsFactory();

nations.forEach(nation => {
  const army = unitsFactory.create(nation);
  army.id = id++;
  army.x = x += 5;
  army.y = y++ % 3;
  army.displayStates();
});

