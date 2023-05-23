$(function () {
    $('.bar').animate({ width: "100%" },10000)


    $('#btn').click(function () {
        $('.bar').stop()
    })
})