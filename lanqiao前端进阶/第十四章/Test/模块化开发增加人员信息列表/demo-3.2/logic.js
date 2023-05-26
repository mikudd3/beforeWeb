import data from "./data.js"


// 数据逻辑文件 logic.js 中，实现返回遍历数组元素和增加数组元素的功能。
let stuInfo = () => {
  return data
}

let addData = (...param)=>{
  let newData = {name: param[0], sex: param[1], age: param[2]};
  data.arrStu.push(newData);
}


export default {
  stuInfo,
  addData
}