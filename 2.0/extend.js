// es6继承
// class Parent {
//   add() {
//     console.log("add");
//   }
// }
// class Child extends Parent {
//   constructor() {
//     super();
//   }
//   bbb() {
//     super.add();
//     console.log("bbb");
//   }
// }

// const child = new Child();
// child.bbb(); // add bbb

// 1. 原型链继承
function Parent() {
  this.name = "parent";
}
Parent.prototype.getName = function () {
  return this.name;
};

function Child() {}
// 注意是 new parent()，也就是指Child的原型指向Parent的实例，原理是 child.__proto__ = Parent.prototype
// 不过chrome更新以后，__proto__替换成了[[Prototype]]
Child.prototype = new Parent();

const child = new Child();
console.log(child.getName());

// 2. 借用构造函数(经典继承)
// 优点
// - 1.避免了引用类型的属性被所有实例共享
// - 2.可以在 Child 中向 Parent 传参

// 缺点
// 1. 方法都在构造函数中定义，每次创建实例都会创建一遍方法。
function Parent(name) {
  this.name = name;
  this.list = [1, 2];
}

function Child(name) {
  Parent.call(this, name);
}

child1 = new Child("1");

child1.list.push(3);
child1 = new Child("1");
console.log(child1); // {list:[1,2,3], name: '1'}
child2 = new Child("2");
console.log(child2); // {list:[1,2], name: '2'}

// 3. 组合继承
// 优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。
function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = new Parent();
Child.constructor = Child;

var child1 = new Child("kevin", "18");

child1.colors.push("black");

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child("daisy", "20");

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]

// 4. 原型式继承
// 就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

var person = {
  name: "kevin",
  friends: ["daisy", "kelly"],
};

var person1 = createObj(person);
var person2 = createObj(person);

person1.name = "person1";
console.log(person2.name); // kevin

person1.friends.push("taylor");
console.log(person2.friends); // ["daisy", "kelly", "taylor"]

// 5. 寄生式继承

// 6. 寄生式组合继承

// 寄生式继承
// function Parent(name) {
//   this.name = name;
// }
// function Child(name) {
//   new Parent(name);
//   this.color = "white";
// }

// Child.prototype = Parent;
// const child = new Child('小然子');
// console.log(child.color);
// console.log(child.name);
