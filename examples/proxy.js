class GuildAccess {
  open() {
    console.log(`Opening guild's build door`);
  }

  close() {
    console.log(`Closing the guild's build door`);
  }
}

class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('Access denied!');
    }
  }

  authenticate(password) {
    return password === 'Correct password';
  }

  close() {
    this.door.close();
  }
}

const door = new SecuritySystem(new GuildAccess());
door.open('Correct password');
door.open("Wrong password");
door.close();
