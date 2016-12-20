class Human {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log('My name is ' + this.name);
  }
  static num_of_hands() {
    console.log(2)
  }
}

Human.num_of_hands()
