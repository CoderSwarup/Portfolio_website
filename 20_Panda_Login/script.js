$('#password').focusin(function () {
    $('form').addClass('up')
});

$('#password').focusut(function () {
    $('form').removeClass('up')
});

// panda eye move
$(document).on("mousemove", function (event) {
    var dw = $(document).width() / 15;
    var dh = $(document).height() / 15;
    var x = event.pageX / dw;
    var y = event.pageY / dh;
    $('.eye-ball').css({
        width: x,
        height: y
    });
})


// $('.btn').click(function () {
//     $('.form').addClass('worng-entry');
//     setTimeout(function () {
//         $('.form').removeClass('worng-entry');
//     }, 3000);
// })