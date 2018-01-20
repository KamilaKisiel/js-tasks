// console.log(this);
// function funkcja() {
//     console.log(this);
// }
// funkcja();
// //window
//
// function funkcja() {
//     'use strict';
//     console.log(this);
// };
// funkcja()
// // undefined
//
// let dog = {
//     sound: "hau hał",
//     talk: function () {
//         console.log(this.sound);
//     }
// }
// dog.talk();
// //hau hał
//
// let cat = {
//     sound: "miał miał"
// }
//
// dog.talk();
// let talkfunction = dog.talk;
// talkfunction(); //undefined
//
// let boundFunction = talkfunction.bind(dog);
// boundFunction(); //hau hał
//
// let talkAsCat = dog.talk.bind(cat);
// talkAsCat(); //miał miał

//Boromir and Faramir function

// let talk = function () {
//     console.log(this.sound);
// }
//  let boromir = {
//      speak: talk, //reference to talk function is
//      sound: "one does not simply walk into mordor"
//  }
//
//  boromir.speak(); //this is boromir
// talk(); //this is global window object
// boromir.speak = talk.bind(boromir);
//
// let faramir = {
//     speak: talk, //talk is clean - bind do
//     sound: "but fear no more! I would not take this thing"
// }
//
// faramir.speak();
// faramir.speak = talk.bind(boromir);
// faramir.speak();

//.CALL AND .APPLY

//bind just sets context
// call, apply - sets context and arguments and executes

// const o = {
//     a: "o object",
//     method: function (a, b, c) {
//         console.log(this, a, b, c)
//     }
// };
//
// const x = {
//     a: "x object"
// };
//
// o.method(1, 2); //this === o, [1,2] 3 paramter nie przekazany: undefined
// o.method.call(x, 1, 2, 3); // this === x, [1,2,3]; o.method.call(1, 2, 3)=> {1}, 2, 3
// o.method.apply(x, [1, 2, 3]); // this === x (tak samo jak wyżej)
//
// log('object literal');

// var o = {};
// o.test = 'test';
// console.log(o);
// var o = a = 'foo', b = 42, c = {}; //to chyba jest źle
// console.log(o);
//
// var a = {a, b, c} //shorthand to copy propertys from another object
// console.log(a);

//object.create tworzy nowy obiekt, więc jak zmienimy cat'a to nie zmienimy nowego obiekty(nie tworzymy referencji, tworzymy nowy obiekt)
//
// const cat = {
//     makeSound: function () {
//         console.log(this.sound);
//     }
//
// }
// secondCat = cat;
// console.log(cat === secondCat); //true
//
// const dachowiec = Object.create(cat); //dachowiec jest nowym obiektem z prototypami cat'a (_proto_ - jeśli tworzymy nowy obiekt ze starego to prototypy starego zostają delegowane do  nowego)
// console.log(cat === dachowiec); //false
//
// dachowiec.sound = 'miałłł'; //cat jest prototypem dla dachowca
// dachowiec.makeSound();
//
// cat.drinkMilk = function () {
//     console.log('yamii...');
// }
// console.log(dachowiec.drinkMilk());

//object.create jest dużo szybsze nić setPrototypeof

// const cat = {
//     makeSound: function () {
//         console.log(this.sound);
//     }
// }
// function objectCreate(proto) {
//     const obj = {};
//     Object.setPrototypeOf(obj, proto);
//     return obj;
// }
//
// const dachowiec = objectCreate(cat); //tworzymy nowy obiekt dachowiec, kopiujemy z cat'a
// dachowiec.sound = 'miałłł';
// dachowiec.makeSound();
//
// const perski = objectCreate(cat);
// perski.sound = 'miałłdajwhiskasmiał';
// perski.makeSound();

//object.assign(target, ...sources) target - do czego wrzucami, source - z czego wrzucamy
//do łączenia obiektów

// let first = {name: 'Tony'};
// let last = {lastName: 'Stark'};
// let person = Object.assign(first, last);
// console.log(person); //zmodyfikowaliśmy first, jest jako target, do którego przypisaliśmy lastName(nie tworzymy nowego obiektu!!!
//
// //merge and overwrite equal keys
// let a = Object.assign({foo: 0}, {bar: 1}, {baz: 2});
// console.log(a);
//
// let b = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
// console.log(b); //{foo:2} nastąpiło nadpisanie

// //clone an object
// let obj = {person: "Thor Odinson"};
// let clone = Object.assign({}, obj);
// console.log(clone); //{person: "Thor Odinson"}
//
// console.log(
//     Object.create({'name': 'Paweł'}), //tu będzie przypisane do proto
//     Object.assign({}, {'name': 'Paweł'}) //tu będzie przypisane na czysto
// );
//.................................................
// let name = {'name': 'Paweł'};
// // let newName = Object.create(name);
// //
// // console.log(newName); // _proto_ => name: Paweł
// //
// // name.name = 'Łukasz';
// // console.log(newName); // _proto_ => name: Łukasz
//
// //.......................................
// let newObj = Object.assign({}, name);
// console.log(newObj);
// name.name = 'Łukasz';
// console.log(newObj); // _proto_ => name: Paweł
//............................................

//all objects have a constructor property
// console.log({}.constructor);
// var o = {};
// console.log(o.constructor === Object); //true
// var o = new Object;
// console.log(o.constructor === Object); //true
// var a = [];
// console.log(a.constructor === Array); //true
// var a = new Array;
// console.log(a.constructor === Array); //true
// var n = new Number(3);
// console.log(n.constructor === Number); //true
//.............................................
// function Tree(name) {
//     this.name = name
// }
// var theTree = new Tree('Redwood');
// console.log(theTree.constructor); //ƒ Tree(name) {this.name = name}
//
// let nextTree = new theTree.constructor('Blackwodd');
// console.log(nextTree, nextTree.constructor); //Tree {name: "Blackwodd"} ƒ Tree(name) {this.name = name}
//
// //.................
// function  Tree(name, n) {
//     this.name = name;
//     this.size = 0;
//     this.calculateSize = function (n) {
//         this.size = n*n;
//     }
// }
// var theTree = new Tree('Redwood');
// theTree.calculateSize(2);
// console.log(theTree); //Tree {name: "Redwood", size: 4, calculateSize: ƒ}
//.........................................