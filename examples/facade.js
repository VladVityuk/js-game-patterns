class Conveyor {
  setHealth() {
    console.log('Added health');
  }

  setMana() {
    console.log('Added mana');
  }

  setArmor() {
    console.log('Added armor');
  }

  setWeapon() {
    console.log('Added weapon');
  }

  removeWeapon() {
    console.log('Remove weapon');
  }

  setPosition() {
    console.log('Set position');
  }
}

class ConveyorFacade {
  constructor() {
    this.unit = new Conveyor();
  }

  assembleUnit() {
    const { unit } = this;

    unit.setHealth();
    unit.setMana();
    unit.setArmor();
    unit.setWeapon();
    unit.setPosition();
  }

  changeWeapon() {
    const { unit } = this;

    unit.removeWeapon();
    unit.setWeapon();
  }
}

const unit = new ConveyorFacade();
unit.assembleUnit();
unit.changeWeapon();
