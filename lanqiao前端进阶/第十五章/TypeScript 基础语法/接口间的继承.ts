interface Animal {
    readonly head: number;
    name: string;
}
interface Person {
    work: string;
}

interface Student extends Animal, Person {
    readonly sno: number;
}

function render(s: Student) {
    console.log(`大家好，我叫${s.name}，我是一名${s.work}，我的学号是${s.sno}。`);
}

let s1 = { head: 1, name: "小花", work: "学生", sno: 1 };

render(s1);