$.fn.isOnScreen = function () {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

var animationtrigger = true;

$(document).ready(function () {
    $(window).scroll(function () {
        if (animationtrigger) {
            if ($('#consumption').isOnScreen()) {
                animationtrigger = false;
                // The element is visible, do something
                $(".wrapper, .beercontainer").css("animation", "tilt 10s forwards");
                $(".wrapper .beercontainer .glass .drink1").css("animation", "pour 10s forwards");
                $(".wrapper .beercontainer .glass .drink2").css("animation", "pour2 10s forwards");
                $(".wrapper .beercontainer .glass .drink3").css("animation", "pour3 10s forwards");
                $(".wrapper .beercontainer .glass .drink4").css("animation", "pour4 10s forwards");
                $(".wrapper .beercontainer .glass .drink5").css("animation", "pour5 10s forwards");
                $("#worldnumber").animate({
                    opacity: 1
                }, 4650);
                setTimeout(
                    function () {
                        $(".drink1").css("animation", "none");

                        $(".drink1").css("bottom", "-78.5755814px");
                    }, 4650);
            }
        }

    });

    $("#worldboth").click(function () {
        $(".drink1").css("bottom", "-78.5755814px");
        $("#worldboth").addClass("active");
        $("#worldmen").removeClass("active");
        $("#worldwomen").removeClass("active");
        $("#worldnumbertext").text("9.45");
    });
    $("#worldmen").click(function () {
        $(".drink1").css("bottom", "-33.22674419px");

        $("#worldboth").removeClass("active");
        $("#worldmen").addClass("active");
        $("#worldwomen").removeClass("active");
        $("#worldnumbertext").text("15.45");
    });
    $("#worldwomen").click(function () {
        $(".drink1").css("bottom", "-122.0348837px");

        $("#worldboth").removeClass("active");
        $("#worldmen").removeClass("active");
        $("#worldwomen").addClass("active");
        $("#worldnumbertext").text("3.7");
    });

    $("#finlandboth").click(function () {
        $(".drink1").css("bottom", "-69.12790698px");
    });

});
