
class Animal {
    readonly head: number;
    name: string;
}
class Cat extends Animal {
    sleep() {
        console.log("呼噜呼噜。。。");
    }
}
let cat = new Cat();
cat.sleep();