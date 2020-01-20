

class UnitsFactory {
  constructor(nation) {
    return nation === 'Orc' ? OrcFactory : ElvesFactory;
  }
}

class Elves {
  constructor(type, life, attack) {
    this.nation = 'Elves';
    this.type = type;
    this.life = life;
    this.attack = attack;
  }
}

class ElvesFactory {
  constructor(type) {
    if (type === 'Archer')
      return new Elves(type, 1000, 300);
    if (type === 'Witcher')
      return new Elves(type, 1100, 320);
  }
}

class Orc {
  constructor(type, life, attack) {
    this.nation = 'Orcs';
    this.type = type;
    this.life = life;
    this.attack = attack;
  }
}

class OrcFactory {
  constructor(type) {
    if (type === 'Knight')
      return new Orc(type, 2000, 100);
    if (type === 'Mystic')
      return new Orc(type, 700, 500);
  }
}

const units = [];

const elvesCreator = new UnitsFactory('Elf');
const elfArcher = new elvesCreator('Archer');
const elfWitcher = new elvesCreator('Witcher');

const orcsCreator = new UnitsFactory('Orc');
const orcKnight = new orcsCreator('Knight');
const orcMystic = new orcsCreator('Mystic');

units.push(elfArcher, elfWitcher, orcKnight, orcMystic);

console.table(units);
