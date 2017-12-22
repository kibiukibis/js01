$(document).ready(function() {
    $("body").before("<h1>jQuery Pratimai</h1>");
    $("div > h2").css({ "color": "red" });
    $("body").css({ "background": "lightgrey" });

    function blink(selector) {
        $(selector).fadeOut('slow', function() {
            $(this).fadeIn('slow', function() {
                blink(this);
            });
        });
    }
    blink(".blink");
    $('a').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $("#accept").change(function() {
        $("#submitbtn").removeAttr('disabled');
    });
});