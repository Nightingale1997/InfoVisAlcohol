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

$(document).ready(function () {
    $(window).scroll(function () {
        if ($('#consumption').isOnScreen()) {
            // The element is visible, do something
            $(".wrapper, .beercontainer").css("animation", "tilt 10s forwards");
            $(".wrapper .beercontainer .glass .drink1").css("animation", "pour 10s forwards");
            $(".wrapper .beercontainer .glass .drink2").css("animation", "pour2 10s forwards");
            $(".wrapper .beercontainer .glass .drink3").css("animation", "pour3 10s forwards");
            $(".wrapper .beercontainer .glass .drink4").css("animation", "pour4 10s forwards");
            $(".wrapper .beercontainer .glass .drink5").css("animation", "pour5 10s forwards");
        } else {
            // The element is NOT visible, do something else
        }
    });

    $("#worldmen").click(function () {
        $(".drink1").css("transition", "2s ease");
        $(".drink1").css("height", "179.6511628px");
    });

});
