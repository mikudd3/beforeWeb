

$(function () {
    $('input[type="submit"]').hover(
        function () {
            changeColor($(this), '#28df99')
            // $(this).css('background-color', '#28df99')
        },
        function () {
            changeColor($(this), '#99f3bd')
            // $(this).css('background-color', '#99f3bd')
        }
    )
    function changeColor(element, color) {
        element.css('background-color', color)
    }
})