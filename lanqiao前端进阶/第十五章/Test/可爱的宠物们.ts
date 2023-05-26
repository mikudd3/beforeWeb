// 创建一个抽象类 Animal，有一个具有默认值的公有属性 name，
// 以及三个抽象类 eat、sleep 和 call。
abstract class Animal {
    public name: string = "";
    abstract eat(): void;
    abstract sleep(): void;
    abstract call(): void;

}
// 创建一个 Dog 类，继承 Animal，并实现其抽象方法。
class Dog extends Animal {
    eat(): void {
        console.log("dog eat");
    }
    sleep(): void {
        console.log("dog sleep");
    }
    call(): void {
        console.log("dog call");
    }

}
// 创建一个 Cat 类，继承 Animal，并实现其抽象方法。
class Cat extends Animal {
    eat(): void {
        console.log("Cat eat");
    }
    sleep(): void {
        console.log("Cat sleep");
    }
    call(): void {
        console.log("Cat call");
    }

}
// 创建一个函数 intro，带有一个 Animal 类型的参数。
let intro = (animal : Animal) =>{
    animal.eat()
    animal.sleep()
    animal.call()
}
// 调用函数 intro 接收 Dog 和 Cat 的实例对象，
// 并通过 eat、sleep 和 call 方法，将对应的实例对象的特性打印到控制台中。
intro(new Dog())
intro(new Cat())