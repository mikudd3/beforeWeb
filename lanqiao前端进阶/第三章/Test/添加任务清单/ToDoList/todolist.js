$(function () {
    // 给添加按钮绑定点击事件
    $('#taskAdd').on('click', function () {
        // 获取 input 输入框中的内容
        let input = $('#taskInput').val()
        // 添加任务项
        $('#tasksList').append(`<li>${input}</li>`)
        // 清空内容
        $('#taskInput').val('')
    })
})