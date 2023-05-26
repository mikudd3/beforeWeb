$(function () {
    // 设置默认AJAX使用GET请求，其请求路径为info.json
    $.ajaxSetup({
        url: "info.json",
        type: "GET",
        dataType: "json"
    });

    // 点击 "加载" 按钮时，请求成功后把 id=1 的引言写入到 p 标签里
    $('#load').click(function () {
        $.ajax({
            success: function (data) {
                $('p').html(data.quotes[0].quote);
            }
        });
    });

    // 点击 "更新" 按钮时，请求成功后根据随机数找到对应 id 的名人名言并显示到 p 标签中
    $('#next').click(function () {
        // 生成 1-10 之间的随机整数
        var randomId = Math.floor(Math.random() * 10) + 1;

        $.ajax({
            data: {
                id: randomId
            },
            success: function (data) {
                $('p').html(data.quotes[0].quote);
            }
        });
    });
});