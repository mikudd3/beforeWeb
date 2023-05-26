interface Animal {
    readonly head: number;
    name: string;
    eat(food: string): void; // eat 方法的描述
}
class Person implements Animal {
    readonly head: number = 1;
    name: string;
    // eat 方法的定义
    eat(food: string) {
        console.log(this.name + "在吃" + food);
    }
    work: string;
    constructor(name: string, work: string) {
        this.name = name;
        this.work = work;
    }
    smile() {
        console.log(this.name + "在微笑...");
    }
}

let p1 = new Person("小花", "程序员鼓励师");

console.log(`大家好，我叫${p1.name}，我是一名${p1.work}。`);
p1.smile();
p1.eat("小龙虾");