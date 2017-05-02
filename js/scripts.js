$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('.parallax-container').height())
        {
            $('.nav').addClass('fixed');
        }
        else
        {
            $('.nav').removeClass('fixed');
        }
    });
});
