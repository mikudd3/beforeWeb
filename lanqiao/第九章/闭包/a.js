// a.js
// 1. 定义一个外部函数，并在里面定义一个局部变量 count
function outer1() {
    var count = 0;

    //2.定义一个内部函数访问外部函数中的局部变量，这时就会形成一个闭包(Closure)
    function test() {
        count++; // 这里形成闭包
        console.log("test函数被调用了" + count + "次");
    }

    return test; // 3. 返回内部函数的引用
}