$(document).ready(function () {
    $('.button').on('click', function () {
        $('.button').removeClass('active');
        $(this).addClass('active');
        const link = $(this).attr('href');
        $('.tab').not(link).removeClass('active-tab')
        $(link).addClass('active-tab')
    });
});
