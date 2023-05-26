import data from "./logic.js"

// 页面逻辑文件 plogic.js 中，调用 logic.js 模块中输出的方法，
// 实现显示数组内容和绑定增加按钮的事件。
let showStuInfo = () => {
    let element = document.querySelector(".info");
    //遍历showStuInfo()的数据插入到info中
    for (const iterator of data.stuInfo().arrStu) {
        // 创建ul
        let ul1 = document.createElement("ul");

        //创建li
        let li1 = document.createElement("li");
        //创建文本节点
        li1.value = iterator.name;
        let text1 = document.createTextNode(iterator.name);
        //将文本节点插入到li中
        li1.appendChild(text1);
        //将li插入到ul中
        ul1.appendChild(li1);

        //创建li
        let li2 = document.createElement("li");
        //创建文本节点
        li2.value = iterator.name;
        let text2 = document.createTextNode(iterator.sex);
        //将文本节点插入到li中
        li2.appendChild(text2);
        //将li插入到ul中
        ul1.appendChild(li2);

        //创建li
        let li3 = document.createElement("li");
        //创建文本节点
        li3.value = iterator.name;
        let text3 = document.createTextNode(iterator.age);
        //将文本节点插入到li中
        li3.appendChild(text3);
        //将li插入到ul中
        ul1.appendChild(li3);

        //将ul插入到info中
        element.appendChild(ul1);
    }
}

let bindEvent = () => {
    let element = document.querySelector("#btn");
    element.addEventListener("click", () => {
        let nameEle = document.querySelector(`#name`)
        let sexEle = document.querySelector(`#sex`)
        let ageEle = document.querySelector(`#age`)
        let name = nameEle.value;
        let sex = sexEle.value;
        let age = ageEle.value;
        console.log(name, age, sex)
        data.addData(name, sex, age);
        // 清空数据
        let clearEle = document.querySelector(".info");
        // 清空clearEle中的所有子元素
        clearEle.innerHTML = "";
        showStuInfo();
    });


}
export default {
    showStuInfo,
    bindEvent
}