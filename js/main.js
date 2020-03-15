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

    for (i = 0; i < 16; i++) {
        $("#people").append("<div class='personstatLine' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man2.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man4.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man2.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man2.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man4.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man4.png' class='personStat' data-aos='zoom-in'><img src='img/man2.png' class='personStat' data-aos='zoom-in'><img src='img/man4.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man4.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man2.png' class='personStat' data-aos='zoom-in'><img src='img/man2.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man2.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man4.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man2.png' class='personStat' data-aos='zoom-in'><img src='img/man4.png' class='personStat' data-aos='zoom-in'><img src='img/man2.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man4.png' class='personStat' data-aos='zoom-in'><img src='img/man2.png' class='personStat' data-aos='zoom-in'><img src='img/man2.png' class='personStat' data-aos='zoom-in'><img src='img/man4.png' class='personStat' data-aos='zoom-in'><img src='img/man4.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><img src='img/man3.png' class='personStat' data-aos='zoom-in'><img src='img/man2.png' class='personStat' data-aos='zoom-in'><img src='img/man4.png' class='personStat' data-aos='zoom-in'><img src='img/man1.png' class='personStat' data-aos='zoom-in'><span class='personstatNumber'>" + (50 * i + 50) + "</span></div>");

    }

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
                $(".worldnumber").animate({
                    opacity: 1
                }, 4650);
                setTimeout(
                    function () {
                        $(".drink1, .drink2, .drink3, .drink4, .drink5").css("animation", "none");

                        $(".drink1").css("bottom", "-78.5755814px");
                        $(".drink2").css("bottom", "-69.12790698px");
                        $(".drink3").css("bottom", "-78.5755814px");
                        $(".drink4").css("bottom", "-81.22093023px");
                        $(".drink5").css("bottom", "-93.31395349px");
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
        $(".drink2").css("bottom", "-69.12790698px");
        $("#finlandboth").addClass("active");
        $("#finlandmen").removeClass("active");
        $("#finlandwomen").removeClass("active");
        $("#finlandnumbertext").text("10.7");
    });
    $("#finlandmen").click(function () {
        $(".drink2").css("bottom", "-20px");

        $("#finlandboth").removeClass("active");
        $("#finlandmen").addClass("active");
        $("#finlandwomen").removeClass("active");
        $("#finlandnumbertext").text("17.2");
    });
    $("#finlandwomen").click(function () {
        $(".drink2").css("bottom", "-116.744186px");

        $("#finlandboth").removeClass("active");
        $("#finlandmen").removeClass("active");
        $("#finlandwomen").addClass("active");
        $("#finlandnumbertext").text("4.4");
    });

    $("#swedenboth").click(function () {
        $(".drink3").css("bottom", "-78.5755814px");
        $("#swedenboth").addClass("active");
        $("#swedenmen").removeClass("active");
        $("#swedenwomen").removeClass("active");
        $("#swedennumbertext").text("9.2");
    });
    $("#swedenmen").click(function () {
        $(".drink3").css("bottom", "-39.65116279px");

        $("#swedenboth").removeClass("active");
        $("#swedenmen").addClass("active");
        $("#swedenwomen").removeClass("active");
        $("#swedennumbertext").text("14.6");
    });
    $("#swedenwomen").click(function () {
        $(".drink3").css("bottom", "-121.2790698px");

        $("#swedenboth").removeClass("active");
        $("#swedenmen").removeClass("active");
        $("#swedenwomen").addClass("active");
        $("#swedennumbertext").text("3.8");
    });

    $("#icelandboth").click(function () {
        $(".drink4").css("bottom", "-81.22093023px");
        $("#icelandboth").addClass("active");
        $("#icelandmen").removeClass("active");
        $("#icelandwomen").removeClass("active");
        $("#icelandnumbertext").text("9.1");
    });
    $("#icelandmen").click(function () {
        $(".drink4").css("bottom", "-40.40697674px");

        $("#icelandboth").removeClass("active");
        $("#icelandmen").addClass("active");
        $("#icelandwomen").removeClass("active");
        $("#icelandnumbertext").text("14.5");
    });
    $("#icelandwomen").click(function () {
        $(".drink4").css("bottom", "-122.0348837px");

        $("#icelandboth").removeClass("active");
        $("#icelandmen").removeClass("active");
        $("#icelandwomen").addClass("active");
        $("#icelandnumbertext").text("3.7");
    });

    $("#norwayboth").click(function () {
        $(".drink5").css("bottom", "-93.31395349px");
        $("#norwayboth").addClass("active");
        $("#norwaymen").removeClass("active");
        $("#norwaywomen").removeClass("active");
        $("#norwaynumbertext").text("7.5");
    });
    $("#norwaymen").click(function () {
        $(".drink5").css("bottom", "-62.3255814px");

        $("#norwayboth").removeClass("active");
        $("#norwaymen").addClass("active");
        $("#norwaywomen").removeClass("active");
        $("#norwaynumbertext").text("11.6");
    });
    $("#norwaywomen").click(function () {
        $(".drink5").css("bottom", "-125.8139535px");

        $("#norwayboth").removeClass("active");
        $("#norwaymen").removeClass("active");
        $("#norwaywomen").addClass("active");
        $("#norwaynumbertext").text("3.2");
    });
});

AOS.init({
    duration: 1200,
})
