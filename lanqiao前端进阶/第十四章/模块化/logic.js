import data from "./data.js";
// 显示数据
function showData() {
    console.log(data.toString());
}
// 向数组追加数据
function addData(v) {
    data.push(v);
    showData();
}
// 删除指定索引号的一项数组元素
function deleData(i) {
    data.splice(i, 1);
    showData();
}
// 输出全部的方法
export default {
    showData,
    addData,
    deleData,
};