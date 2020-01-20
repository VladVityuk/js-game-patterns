class Dwarf {
  constructor(armor) {
    this.armor = armor;
  }

  getArmor() {
    return this.armor;
  }
}

class GodMode {
  constructor(unit) {
    this.unit = unit;
  }

  getArmor() {
    return this.unit.getArmor() + 1000;
  }
}

let dwarf = new Dwarf(1000);
dwarf = new GodMode(dwarf);

console.log(dwarf.getArmor());
