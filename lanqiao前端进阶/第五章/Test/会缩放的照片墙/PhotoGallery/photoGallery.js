$(function () {
    $('img').hover(
        function () {
            $(this).animate({
                width: '200px',
                height: '200px'
            }, 1000)
        },
        function () {
            $(this).delay(1000).animate({
                width: '130px',
                height: '130px'
            }, 1000)

        }
    )
})