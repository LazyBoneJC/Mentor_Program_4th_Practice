class Dog {
  // 建構子 - 適合拿來做初始化的作業
  constructor(name) {
    this.name = name;
  }

	// setter
	setName(name) {
		this.name = name; // this 就是對應到 d
	}
  // getter
  getName() {
    return this.name;
  }

	// 注意 class 裡面的 method 不用加上 function
	sayHello() {
		console.log(this.name, 'say hello!');
	}
}

let d = new Dog('Doggy'); // instantiation 實例化
// 傳進去的 Doggy 就會傳到 Contructor func 的 name 裡面
// 利用 Constructor function 直接對 Dog 命名

// d.setName('Harvy');
d.sayHello();
console.log(d.getName());