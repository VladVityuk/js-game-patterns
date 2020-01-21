class Horse {
  simpleInterface() {
    console.log('Horse - i-go-go');
  }
}

class Bucephalus {
  complicatedInterface() {
    console.log('Bucephalus - I-GO-GO!');
  }
}

class BucephalusAdapter {
  constructor(animal) {
    this.animal = animal;
  }

  simpleInterface() {
    this.animal.complicatedInterface();
  }
}

class Animal {
  startRide(animal) {
    animal.simpleInterface();
  }
}

const animal = new Animal();
const typicalHorse = new Horse();
animal.startRide(typicalHorse);

const animal2 = new Animal();
const superHorse = new BucephalusAdapter(new Bucephalus());
animal2.startRide(superHorse);
