$(function () {
    // 切换标题
    $('#title').click(function () {
        let $title = $('<h2>秋下荆门</h2>')
        $("#container h2").replaceWith($title);
    })

    // 切换内容
    $('#poem').click(function () {
        let $poem1 = $("<p>霜落荆门江树空，布帆无恙挂秋风。</p>");
        let $poem2 = $("<p>此行不为鲈鱼绘，自爱名山入猢中。</p>");
        $("#grah1").replaceWith($poem1);
        $("#grah2").replaceWith($poem2);
    })
})