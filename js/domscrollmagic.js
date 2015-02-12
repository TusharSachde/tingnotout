isdebug = false;
var controller;


$(document).ready(function ($) {
    //             scene Footer

    controller = new ScrollMagic();

    var $alltween = $("[triggerElement]");

    for (var i = 0; i < $alltween.length; i++) {
        var $tween = $alltween.eq(i);
        var duration = $tween.attr("duration");
        var offset = $tween.attr("offset");
        var triggerElement = $tween.attr("triggerElement");
        var pin = $tween.attr("pin");
        if (pin && pin == "true") {
            var scene = new ScrollScene({
                    triggerElement: triggerElement,
                    duration: duration,
                    offset: offset
                })
                .setPin("[triggerElement]:eq(" + i + ")")
                .addTo(controller);

            if (isdebug) {
                scene.addIndicators();
            }
        } else {
            var tocss = $tween.attr("tocss");
            tocss = CSSJSON.toJSON(tocss);
            tocss = tocss.attributes;

            //console.log(tocss);

            var scene2 = new ScrollScene({
                    triggerElement: triggerElement,
                    duration: duration,
                    offset: offset
                })
                .addTo(controller);

            var tween2 = TweenMax.to("[triggerElement]:eq(" + i + ")", 1, {
                css: tocss,
            });
            scene2.setTween(tween2);
            if (isdebug) {
                scene2.addIndicators();
            }
        }


    };



});