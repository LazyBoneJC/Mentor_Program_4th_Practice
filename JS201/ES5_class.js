// Constructor Method
function Dog(name) {
  this.name = name;
}

Dog.prototype.getName = function() {
  return this.name;
}

Dog.prototype.sayHello = function() {
  console.log(this.name);
}

Object.prototype.sayHello = function() {
  console.log('Object', this.name);
}

function newDog(name) {
  var obj = {}; // 執行完 Constructor 把資料都放到這 obj
  Dog.call(obj, name);
  obj.__proto__ = Dog.prototype;
  return obj;
}

var d = new Dog('doggy');
var b = newDog('boggy');
b.sayHello();
console.log(b.getName());
