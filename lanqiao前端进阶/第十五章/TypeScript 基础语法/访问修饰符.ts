class Dog {
    public name: string; // 显式声明公有属性 name
    constructor(name: string) {
        this.name = name; // 初始化属性 name
    }
    run() { }
}
let dog = new Dog("狗子");
console.log(dog.name); // 狗子
dog.name = "二哈"; // 二哈