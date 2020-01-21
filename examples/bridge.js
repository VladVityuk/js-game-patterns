class Unit {
  constructor(race) {
    this.race = race;
  }
}

class Type {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class DarkRace extends Type {
  constructor() {
    super("dark race");
  }
}

class LightRace extends Type {
  constructor() {
    super("light race");
  }
}

class Elf extends Unit {
  constructor(race) {
    super(race);
  }

  create() {
    console.log(`Nation: Elf, Race: ${this.race.get()}`);
  }
}

class Mystic extends Unit {
  constructor(race) {
    super(race);
  }

  create() {
    console.log(`Nation: Mystic, Race: ${this.race.get()}`);
  }
}

const mystic = new Mystic(new DarkRace());
mystic.create();

const elf = new Elf(new LightRace());
elf.create();
