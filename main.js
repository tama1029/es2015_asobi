// class
class Human {
  constructor(name) {
    this._name = name;
  }
  // prototypeメソッド　インスタンスから呼び出せるメソッド
  hello() {
    console.log('My name is ' + this._name);
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

//----------------------------------------------------------------//

// Data model
class Neko {
    constructor(name, type) {
        this._name = name;
        this._type = type;
    }

    // constructorは１個のみ
    // constructor(name) {
    //     this._name = name;
    // }

    get name(){
        return this._name;
    }

    set name(val){
        if (val) {
            this._name= val;
        } else {
            this._name = 'No Name';
        }
    }

    get type(){
        return this._type;
    }

    set type(val){
        if (val) {
            this._type= val;
        } else {
            this._type = 'No Name';
        }
    }
}

neko = new Neko('tama', 'syamu');
console.log(neko.name);
console.log(neko.type);
neko.name = 'tama2';
neko.type = 'syamu2';
console.log(neko.name);
console.log(neko.type);

//----------------------------------------------------------------//

// クラスの継承 constructor内にsuper書かなくても自動で親側がつかわれるみたい
class Animal {
    constructor(name) {
        this._name = name;
    }

    speak() {
        console.log(this._name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this._name + ' barks.');
    }
}

dog = new Dog('poti');
dog.speak();