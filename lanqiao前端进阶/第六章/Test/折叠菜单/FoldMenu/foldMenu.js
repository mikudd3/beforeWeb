$(function () {
    // 给每个菜单项绑定点击事件
    $('#menu ul li').click(function () {
        let submenu = $(this).find('ul')
        // 判断当前菜单是否已经展开
        if (submenu.is(":hidden")) {
            // 如果菜单未展开，则下拉其内容
            submenu.slideDown(200)
            $(this).addClass('active').siblings('li').removeClass('active')
        } else {
            // 如果菜单已展开，则折叠其内容
            submenu.slideUp(200)
            $(this).removeClass('active')
        }
    })
})