class Unit {
  constructor(type, life, attack) {
    this.type = type;
    this.life = life;
    this.attack = attack;
  }
}

class UnitFactory {
  create(type) {
    if (type === 'Goblin')
      return new Unit(type, 1000, 300);
    if (type === 'Elf')
      return new Unit(type, 1100, 320);
  }
}

const factory = new UnitFactory();

const goblin = factory.create('Goblin');
const elf = factory.create('Elf');
const elf2 = factory.create('Elf');

console.table(goblin);
console.table(elf);
console.table(elf2);
