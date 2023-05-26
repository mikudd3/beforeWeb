// $(function () {
//     $('.up-hover').mouseenter(function () {
//         $(this).find('.content').show()
//     })
//     $('.up-hover').mouseleave(function () {
//         $(this).find('.content').css('display', 'none')
//     })

// })

$(function () {
    $('.up-hover').mouseenter(function () {
        $(this).children('.content').show()
    })
    $('.up-hover').mouseleave(function () {
        $(this).children('.content').css('display', 'none')
    })

})