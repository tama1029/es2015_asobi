// 変数宣言と代入

var x = 10;
x = 20;

console.log(x);

let y = 10;
y = 20;
// letは再宣言できない
// let y = 'aaa';

console.log(y);

const z = 10;
// constは再宣言、再入力できない
// z = 20;

console.log(z);

// スコープ
// var 関数スコープ
// let,const ブロックスコープ
// 上の階層のブロックは取得できるが、下の階層のものは取れない
(function () {
    var hoge1 = 'hoge1';
    let fuga1 = 'fuga1';
    const piyo1 = 'piyo1';

    if (true) {
        var hoge = 'hoge';
        let fuga = 'fuga';
        const piyo = 'piyo';

        console.log(hoge); //hoge
        console.log(fuga); //fuga
        console.log(piyo); //piyo
        console.log(hoge1); //hoge
        console.log(fuga1); //fuga
        console.log(piyo1); //piyo
    }

    console.log(hoge); //hoge
    // console.log(fuga); //ReferenceError: fuga is not defined
    // console.log(piyo); //ReferenceError: piyo is not defined
}());
