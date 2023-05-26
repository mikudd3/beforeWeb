//定义接口 Person，包含 id 和 name 两个属性
interface Person {
    id: number;
    name: string;
}
//定义接口 Result
interface Result {
    dataList: Person[];
}
//定义函数 render 使用参数 result 接收后端返回数据，并渲染到控制台
function render(result: Result) {
    //遍历 result.dataList
    result.dataList.forEach((person) => {
        console.log(person.id, person.name); //输出到控制台
    });
}
//模拟从后端获取到数据
let result = {
    dataList: [
        { id: 1, name: "二狗子" },
        { id: 2, name: "小花" },
    ],
};
//调用 render 函数，渲染数据 result
render(result);