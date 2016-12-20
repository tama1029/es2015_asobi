// class
class Human {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log('My name is ' + this.name);
  }
  // ruby でいうところのself.かな インスタンスの生成無しに呼び出せるメソッド
  static num_of_hands() {
    console.log(2)
  }
}

Human.num_of_hands();
hello = new Human('tama');
hello.hello();
hello2 = new Human('tama2');
hello2.hello();
