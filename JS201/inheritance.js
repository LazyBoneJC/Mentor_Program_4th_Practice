class Dog {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(this.name, ": hello!");
  }
}

// 因為 BlackDog 沒有 Constructor 的關係，他就會去找繼承的 parent，也就是上一層的 Constructor 來執行
class BlackDog extends Dog {
  // 需求：在建立 Instance 的時候就 call sayHello()
  // 因為 call sayHello 時 parent Dog 的 Constructor 還沒執行、還沒初始化
  // 所以強迫要 call super() 並帶上 parameter，把 name 往上傳到 parent 的 Constructor 先做處理
  // 補充：call super() 其實就是往上找，call parent 的 Constructor
  constructor(name) {
    super(name);
    this.sayHello();
  }
  test() {
    console.log("test!", this.name);
  }
}

var bd = new BlackDog('bdog');
bd.test();