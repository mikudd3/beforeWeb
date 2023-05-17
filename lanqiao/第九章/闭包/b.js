function outer2() {
    var count = 0;

    function test2() {
        count++;
        console.log("test2函数被调用了" + count + "次");
    }

    return test2;
}