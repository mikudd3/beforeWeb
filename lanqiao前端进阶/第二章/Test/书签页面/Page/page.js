$(function () {
    // 使用伪类选择器，给最后一个 p 元素的最后一个子元素设置上边距属性，其值为 40px。
    $('p:last-of-type:last-child').css('margin-top', '40px')

    // 使用元素选择器，给 article 元素设置最小高度为 50vh 和下边距属性为 30px。
    $('article').css({
        'min-height': '50vh',
        'margin-bottom': '30px'
    })

    // 使用属性选择器，给类名为 margin 的元素设置下边距，其值为 100vh。
    $("[class='margin']").css("margin-bottom", "100vh")

    // 使用元素选择器，给 nav 元素设置背景颜色为 #99bbab，位置属性为固定，填充属性为 30px。
    $('nav').css({
        'background-color': '#99bbab',
        'position': 'fixed',
        'padding': '30px'
    })

    // 当点击导航项，使用 addClass 方法给当前导航项增加 active 的样式，并使用 removeClass 移除之前导航项的 active 样式。
    $('.nav a').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })


})