$(function () {
    $('#mainImg').hide();
    $("figure").prepend('<img id="img1" src="">');
    $("figure").prepend('<img id="img2" src="">');
    $("figure").prepend('<img id="img3" src="">');
    $("a").click(function (e) {
        e.preventDefault();

    });
    $("#first").click(function () {
        $("figcaption").fadeOut(100);
        $(this).clone().css({
            opacity: '0.2'
        }).appendTo('#thumbnails').offset({
            top: 70, left: 100
        }).animate({
            opacity: 0.25,
            "width": '+=40px',
            "height": '+=40px'
        }, 1000, "swing").animate({
            opacity: 0
        }, 1000, "swing").clone().appendTo('#thumbnails').offset({
            top: 80, left: 180
        }).animate({
            opacity: 0.35,
            "width": '+=80px',
            "height": '+=80px'
        }, 1000, "swing").animate({
            opacity: 0
        }, 1000, "swing").clone().appendTo('#thumbnails').offset({
            top: 90, left: 310
        }).animate({
            opacity: 0.45,
            "width": '+=120px',
            "height": '+=120px'
        }, 1000, "swing").animate({
            opacity: 0
        }, 3000, "swing");
        $("#img2").hide();
        $("#img3").hide();
        $("#img1").attr("src","images/clouds.png").hide().fadeIn(3000);

        $("figcaption").animate({
            opacity: .7
        }).fadeIn(500);
        $('figcaption').text("Clouds over the water").fadeIn(3000);
    });

    $("#second").click(function () {
        $("figcaption").fadeOut(100);
        $(this).clone().css({
            opacity: '0.2'
        }).appendTo('#thumbnails').offset({
            top: 160, left: 100
        }).animate({
            opacity: 0.25,
            "width": '+=40px',
            "height": '+=40px'
        }, 1000, "swing").animate({
            opacity: 0
        }, 1000, "swing").clone().appendTo('#thumbnails').offset({
            top: 120, left: 180
        }).animate({
            opacity: 0.35,
            "width": '+=80px',
            "height": '+=80px'
        }, 1000, "swing").animate({
            opacity: 0
        }, 1000, "swing").clone().appendTo('#thumbnails').offset({
            top: 60, left: 310
        }).animate({
            opacity: 0.45,
            "width": '+=120px',
            "height": '+=120px'
        }, 1000, "swing").animate({
            opacity: 0
        }, 3000, "swing");
        $("#img1").hide();
        $("#img3").hide();
        $("#img2").attr("src","images/lightening.png").hide().fadeIn(3000);

        $("figcaption").animate({
            opacity: .7
        }).fadeIn(500);
        $('figcaption').text("Reddish clouds with lightning").fadeIn(3000);
    });
    $("#third").click(function () {
        $("figcaption").fadeOut(100);
        $(this).clone().css({
            opacity: '0.2'
        }).appendTo('#thumbnails').offset({
            top: 260, left: 100
        }).animate({
            opacity: 0.25,
            "width": '+=40px',
            "height": '+=40px'
        }, 1000, "swing").animate({
            opacity: 0
        }, 1000, "swing").clone().appendTo('#thumbnails').offset({
            top: 180, left: 180
        }).animate({
            opacity: 0.35,
            "width": '+=80px',
            "height": '+=80px'
        }, 1000, "swing").animate({
            opacity: 0
        }, 1000, "swing").clone().appendTo('#thumbnails').offset({
            top: 80, left: 310
        }).animate({
            opacity: 0.45,
            "width": '+=120px',
            "height": '+=120px'
        }, 1000, "swing").animate({
            opacity: 0
        }, 3000, "swing");
        $("#img2").hide();
        $("#img1").hide();
        $("#img3").attr("src","images/rainbow.png").hide().fadeIn(3000);

        $("figcaption").animate({
            opacity: .7
        }).fadeIn(1000);
        $('figcaption').text("Sringtime sky with a rainbow")
    });
});
