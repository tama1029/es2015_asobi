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

// クラスの継承 constructor内にsuper書かなくても自動で親側がつかわれるみたい
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

dog = new Dog('poti');
dog.speak();