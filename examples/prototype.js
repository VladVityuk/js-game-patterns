class Orc {
  constructor(armor, attack, life) {
    this.armor = armor;
    this.attack = attack;
    this.life = life;
  }

  createCopy() {
    return new Orc(this.armor, this.attack, this.life);
  }
}

const baseOrc = new Orc(100, 30, 500);

const orc1 = baseOrc.createCopy();
const orc2 = baseOrc.createCopy();
const orc3 = baseOrc.createCopy();

orc2.armor = 150;

console.log(orc1);
console.log(orc2);
console.log(orc3);
