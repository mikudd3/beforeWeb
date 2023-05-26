class Dog {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    run() {}
    readonly head: number = 1; // 声明只读属性 head 并赋予初始值 1
    readonly legs: number = 4; // 声明只读属性 legs 并赋予初始值 4
  }
  
  let dog = new Dog("狗子");
  console.log(
    `大家好，我叫${dog.name}，我有 ${dog.head} 个头 ${dog.legs} 条腿。`
  );
  // dog.head = 3; // 报错