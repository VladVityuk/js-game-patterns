class Dealer {
  constructor() {
    this.customers = [];
  }

  orderWeapon(customer, weapon, info) {
    const name = customer.getName();
    console.log(`${name} ordered ${weapon}`);
    console.log(`Weapon info: ${weapon} ${info}`);
    this.addToCustomersList(name);
  }

  addToCustomersList(name) {
    this.customers.push(name);
  }

  getCustomerList() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(weapon, info) {
    this.dealerMediator.orderWeapon(this, weapon, info);
  }
}

const mediator = new Dealer();

const user1 = new Customer('Human', mediator);
const user2 = new Customer('Elf', mediator);

user1.makeOrder('Sword', 'with fire effect');
user2.makeOrder('Bow', 'with brilliant arrows');

console.table(mediator.getCustomerList());