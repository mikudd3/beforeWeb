// 1. 定义一个外部函数，外部函数中定义一个局部变量
function useProductEffect() {
    var a = 50;

    var add = function () {
        console.log("添加商品:" + a++); //2.内部函数访问外部函数中的变量，产生闭包
    };

    var remove = function () {
        console.log("删除商品:" + a++);
    };

    return { add, remove }; //3. 返回json对象
}