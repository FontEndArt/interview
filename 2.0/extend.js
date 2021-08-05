// es6
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

// 原型链继承
// function Parent() {
//   this.name = "parent";
// }
// Parent.prototype.getName = function () {
//   return this.name;
// };

// function Child() {}
// // 注意是 new parent()，也就是指Child的原型指向Parent的实例，原理是 child.__proto__ = Parent.prototype
// // 不过chrome更新以后，__proto__替换成了[[Prototype]]
// Child.prototype = new Parent();

// const child = new Child();
// console.log(child.getName());

// 借助构造函数继承
function Parent() {
  this.list = [1, 2];
}

function Child() {
}

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
