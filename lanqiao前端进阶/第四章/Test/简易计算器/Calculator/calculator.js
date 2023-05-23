$(function () {
    var result = 0; // 结果
    var prevEntry = 0; // 前一个输入
    var operation = null; // 运算符
    var currentEntry = '0'; // 当前输入
    // 绑定点击事件
    $('.button').on('click', function () {
        var buttonPressed = $(this).html(); // 当前按键的内容
        // 如果当前按下的是 C 键，把结果置为 0 
        if (buttonPressed === "C") {
            result = 0;
            currentEntry = '0';
            // 如果当前按下的是 . 键，把结果保存在变量 currentEntry 里
        } else if (buttonPressed === '.') {
            currentEntry += '.';
            // 如果当前输入是数字
        } else if (isNumber(buttonPressed)) {
            if (currentEntry === '0') currentEntry = buttonPressed;
            else currentEntry = currentEntry + buttonPressed;
            // 如果当前输入是运算符
        } else if (isOperator(buttonPressed)) {
            prevEntry = parseFloat(currentEntry);
            operation = buttonPressed;
            currentEntry = '';
            // 如果当前输入是 %
        } else if (buttonPressed === '%') {
            currentEntry = currentEntry / 100;
            // 如果当前输入是平方符号
        } else if (buttonPressed === 'sqrt') {
            currentEntry = Math.sqrt(currentEntry);
            // 如果当前输入是等号
        } else if (buttonPressed === '=') {
            currentEntry = operate(prevEntry, currentEntry, operation);
            operation = null;
        }
        updateScreen(currentEntry);
    });
});
updateScreen = function (displayValue) {
    var displayValue = displayValue.toString();
    $('.screen').html(displayValue.substring(0, 10));
};
isNumber = function (value) {
    return !isNaN(value);
}
isOperator = function (value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
};
operate = function (a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/') return a / b;
}