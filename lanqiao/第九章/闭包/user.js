// 1. 定义一个外部函数，外部函数中定义一个局部变量
function useUserEffect() {
    var a = 10;

    var add = function () {
        console.log("添加用户:" + a++); //2.内部函数访问外部函数中的变量，产生闭包
    };

    var remove = function () {
        console.log("删除用户:" + a++);
    };

    return { add, remove }; //3. 返回json对象
}