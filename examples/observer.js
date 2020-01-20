class ClanNews {
  constructor() {
    this.news = '';
    this.actions = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach(subs => subs.inform(this));
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer));
  }
};

class Leader {
  constructor(name) {
    this.name = name;
  }

  inform(message) {
    console.log(`${this.name} say: ${message.news}`);
  }
};

class ClanMember {
  constructor(name) {
    this.name = name;
  }

  inform(message) {
    console.log(`${this.name} has been informed about: ${message.news}`);
  }
};

const news = new ClanNews();
const lead = new Leader('Big Boss');
const member1 = new ClanMember('Santa');
const member2 = new ClanMember('User32112334');

news.register(lead);
news.register(member1);
news.register(member2);
news.setNews('We are awesome!');
