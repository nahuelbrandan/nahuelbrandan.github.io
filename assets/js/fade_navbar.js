(function ($) {
    $(document).ready(function () {

        // fade in .navbar
        $(function () {
            $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > 600) {
                    $('.navbar').fadeOut();
                } else {
                    $('.navbar').fadeIn();
                }
            });
        });
    });
}(jQuery));
