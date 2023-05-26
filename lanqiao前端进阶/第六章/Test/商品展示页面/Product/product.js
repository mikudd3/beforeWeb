$(function () {
    $(".product--drink span").click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
})
