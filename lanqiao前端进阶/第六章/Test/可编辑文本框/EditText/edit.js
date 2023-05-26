$(function () {
    $('.edit').click(function () {
        // 当点击「编辑」按钮时，编辑按钮被隐藏，保存按钮显示出来，
        $(this).hide()
        $('.save').show()
        // 判断文本框是否存在，若存在把 class = editable 的样式添加到盒子上，文本框变为可编辑。
        let value = $('.box').hasClass('editable')
        // console.log(value);
        if (!value) {
            // 把class=editable的样式添加到盒子上
            $('.box').addClass('editable');
            // 文本框变为可编辑
            $('.text').attr('contenteditable', true);
            // 聚焦文本框
            $('.text').focus();
        }


    })

    $('.save').click(function () {
        // 当点击「编辑」按钮时，编辑按钮被隐藏，保存按钮显示出来，
        $(this).hide()
        $('.edit').show()
        // 判断文本框是否存在，若存在把 class = editable 的样式添加到盒子上，文本框变为可编辑。
        let value = $('.box').hasClass('editable')
        // console.log(value);
        if (value) {
            // 把class=editable的样式添加到盒子上
            $('.box').removeClass('editable');
            // 文本框变为可编辑
            $('.text').attr('contenteditable', false);

        }


    })
})