$(function () {
    // 提交按钮点击事件
    $('#btn').click(function (e) {
        // 阻止表单默认提交行为
        e.preventDefault();

        // 获取表单数据并序列化
        let formData = $('form').serialize();

        // 发送Ajax请求
        $.ajax({
            url: 'index.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                // 解析JSON字符串
                var data = JSON.parse(response);

                // 清空结果区域
                $('#results').empty();

                // 遍历留言数据并添加到结果区域
                for (var i = 0; i < data.length; i++) {
                    var message = data[i];
                    var messageDiv = '<div>' + message.username + ': ' + message.content + '</div>';
                    $('#results').append(messageDiv);
                }
            }
        });
    });
});