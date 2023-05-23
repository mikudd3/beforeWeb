$(function () {
    // 点击「小」时，
    // h1 元素里的文字大小变为 24px，
    // h4 元素里的文字大小变为 16px，
    // p 元素里的文字大小变为 12px。
    $('#small').click(function () {
        $('h1').animate({
            "font-size": '24px'
        })
        $('h4').animate({
            "font-size": '16px'
        })
        $('p').animate({
            "font-size": '12px'
        })

    })

    // 点击「中」时，
    // h1 元素里的文字大小变为 36px，
    // h4 元素里的文字大小变为 24px，
    // p 元素里的文字大小变为 14px。
    $('#medium').click(function () {
        $('h1').animate({
            "font-size": '36px'
        })
        $('h4').animate({
            "font-size": '24px'
        })
        $('p').animate({
            "font-size": '14px'
        })
    })
    // 点击「大」时，
    // h1 元素里的文字大小变为 48px，
    // h4 元素里的文字大小变为 36px，
    // p 元素里的文字大小变为 18px。
    $('#large').click(function () {
        $('h1').animate({
            "font-size": '48px'
        })
        $('h4').animate({
            "font-size": '36px'
        })
        $('p').animate({
            "font-size": '18px'
        })
    })

})