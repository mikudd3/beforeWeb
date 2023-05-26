class Dog {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run() { }
}

class Husky extends Dog {
    color: string; // 添加自己的属性
    constructor(name: string, color: string) {
        super(name); // 不写会提示报错
        this.color = color; // 初始化自己的属性
    }
}