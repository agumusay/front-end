$(document).ready(function () {
    $('.gallery-item').hide();
    $('.active').show();
    setInterval(() => {
        let current = $('.active');
        let next = current.next();
        if (next.length == 0) {
            next = $('.gallery-item:first-child');
        }
        current.fadeOut(1000).removeClass('active')
        next.fadeIn(1000).addClass('active');
    }, 2000);
});
