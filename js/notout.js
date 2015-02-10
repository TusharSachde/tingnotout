var notOut = {

    init: function () {
        //full page scroll
        $("#fullpage").fullpage({
            scrollingSpeed: 1000,
            anchors: ['home', 'about-us', 'our-innings', 'contact-us'],
            css3: true,
            menu: '#menu',
            scrollBar: false,
            verticalCentered: true,
            onLeave: function (index, nextIndex, direction) {

                if ($("#menu").hasClass("in")) {
                    $("#menu").removeClass("in");
                }

                if (index == 3) {
                    //set navigation color on scroll page
                    $('.navigation').removeClass("nav-films").removeClass("nav-cinemas").removeClass("nav-entertainment");
                    $('.logo').find('img').attr('src', 'images/logo-films.png');
                    $(".tools.verticle li").removeClass("active");
                    $(".tools.horizontal li").removeClass("active");
                    notOut.selectTool();
                    //reset cinema landing page
                    $(".cinema-landing").show();
                    $(".cinema-inner").hide();

                    //reset our innings
                     $(".section-innings").hide();
                     $(".section-services").show();
                }

                if (nextIndex == 3) {
                    $(".section-innings").hide();

                    //set films as selected
                    if ($(".tools.verticle li[class='active']").length > 0) {
                        $(".tools.verticle li[class='active']").trigger("click");      
                        
                        //show our innings
                        $(".section-services").hide();
                        $(".section-innings").show();               
                    }                   
                }


                if (index == 1) {
                    $("body").removeClass("stadium");
                    notOut.hidePreview();
                }
                if (nextIndex == 1) {
                    $("body").addClass("stadium");
                }

                if (nextIndex == 4) {
                    $("footer").fadeIn(2000);
                }

                if (index == 4) {
                    $("footer").fadeOut(1000);
                }
            },
        });

        //preview click
        $("#preview").click(function () {
            notOut.hidePreview();
        });

        //tools hover effects
        $(".tools li").hover(function () {
            var img = $(this).data("rollover");
            $(this).find("img").attr("src", "images/" + img + "-rollover.png");
        }, function () {
            var img = $(this).data("rollover");
            if (!$(this).hasClass("active")) {
                $(this).find("img").attr("src", "images/" + img + ".png");
            }
        });

        //horizontal tools
        $(".tools.horizontal li").click(function () {
            notOut.selectTool(this);

             //reset our innings
             $(".section-innings").show();
             $(".section-services").hide();
        });

        //our innings tools
        $(".tools.verticle li").click(function () {
            notOut.selectTool(this);
        });

        //video thumb
        $("a.youtube").hover(function () {
            var thumb = $(this).data("img");
            $(this).find("img").attr("src", "images/" + thumb + "-thumb.png");
        }, function () {
            var thumb = $(this).data("img");
            $(this).find("img").attr("src", "images/" + thumb + ".png");
        });

        //youtube popup
        $(".youtube").fancybox({
            maxWidth: 600,
            maxHeight: 450,
            fitToView: false,
            width: '70%',
            height: '70%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none',
            preload: true
        });

        //cinemas news popup
        $(".pa-thumb a, #cinema-mobile a[href!='#']").fancybox({
            fitToView: true,
            width: '100%',
            height: '100%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none',
            preload: true
        });

        //cinema landing menu click
        $(".cinema-menu .menu-item, .cinema-menu-heading a").click(function () {
            $(".cinema-landing").fadeOut(500, function () {
                $(".cinema-inner").fadeIn(500);
            });

            //show selected tab
            var tab = $(this).data("tab");
            $(".cinema-content-tab").removeClass("active");
            $("#" + tab).addClass("active");

            //show selected menu active
            $(".cinema-inner-menu a").removeClass("active");
            $(".cinema-inner-menu a[data-tab='" + tab + "']").addClass("active");
        });

        $('#tictac-mobile,#cinema-mobile,#cinema-carousel').jcarousel({
            center: false
        });


        //animation
        notOut.magicScroll();

    },

    hidePreview: function () {
        $("#preview").fadeOut(2000, function () {
            $("nav").fadeIn(1000);
            $("#landing").fadeIn(3000);
        });
    },

    selectTool: function (target) {
         //reset rollover state
        $(".tools.verticle li, .tools.horizontal li").removeClass("active");
        $(".tools.verticle li, .tools.horizontal li").each(function (idx, obj) {
            var rolloverimg = $(obj).data("rollover");
            $(obj).find("img").attr("src", "images/" + rolloverimg + ".png");
        });

        //show active tab
        $(".tab-content").hide();
        if(target)
        {
            var tab = $(target).data("tab");
            $("." + tab).show();
        }

        //set navigation color
        $('.navigation').removeClass("nav-films").removeClass("nav-cinemas").removeClass("nav-entertainment");
        if(target)
        {
            var navClass = $(target).data("nav");        
            $('.navigation').addClass('nav-' + navClass)
            $('.logo').find('img').attr('src', 'images/logo-' + navClass + '.png');
       

            //set active tool rollover
            $(".tools.verticle li[data-nav='" + navClass + "'],.tools.horizontal li[data-nav='" + navClass + "']").addClass("active");
            var img = $(target).data("rollover");
            $(".tools.verticle li[data-nav='" + navClass + "'],.tools.horizontal li[data-nav='" + navClass + "']").find("img").attr("src", "images/" + img + "-rollover.png");

        }
    },

    magicScroll: function () {
        var controller = new ScrollMagic();

        //flying-ball-real
        var flyingBallRealTween = new TimelineMax({ repeat: -1, yoyo: true })
              .add(TweenMax.to(".flying-ball-real", 0.3, { bottom: "+=3", left: "-=3", rotation: -3 }))
              .add(TweenMax.to(".flying-ball-real", 0.3, { bottom: "-=5", left: "+=3", rotation: 0 }))
              .add(TweenMax.to(".flying-ball-real", 0.3, { bottom: "+=3", left: "+=3", rotation: 3 }))
              .add(TweenMax.to(".flying-ball-real", 0.3, { bottom: "-=3", left: "-=2", rotation: 1.5 }))
              .add(TweenMax.to(".flying-ball-real", 0.3, { bottom: "+=3", left: "-=3", rotation: -1.5 }))
              .add(TweenMax.to(".flying-ball-real", 0.3, { bottom: "+=2", left: "+=2", rotation: 0 }))
              .add(TweenMax.to(".flying-ball-real", 0.3, { bottom: "-=5" }));

        var flyingBallReal = new ScrollScene({
            triggerElement: '#section1',
            duration: 0,
            triggerHook: 1,
            reverse: false
        })
        .setTween(flyingBallRealTween)
		.addTo(controller);

        //popcone
        var popconeTween = new TimelineMax({ repeat: -1, yoyo: true })
               .add(TweenMax.to(".service-popcorn", 0.3, { bottom: "+=5", left: "-=6", rotation: -3 }))
               .add(TweenMax.to(".service-popcorn", 0.3, { bottom: "-=10", left: "+=6", rotation: 0 }))
               .add(TweenMax.to(".service-popcorn", 0.3, { bottom: "+=5", left: "+=6", rotation: 3 }))
               .add(TweenMax.to(".service-popcorn", 0.3, { bottom: "-=5", left: "-=3", rotation: 1.5 }))
               .add(TweenMax.to(".service-popcorn", 0.3, { bottom: "+=5", left: "-=6", rotation: -1.5 }))
               .add(TweenMax.to(".service-popcorn", 0.3, { bottom: "+=5", left: "+=3", rotation: 0 }))
               .add(TweenMax.to(".service-popcorn", 0.3, { bottom: "-=10" }));

        var popcone = new ScrollScene({
            triggerElement: '#section2',
            duration: 0,
            triggerHook: 1,
            reverse: false
        })
        .setTween(popconeTween)
		.addTo(controller);
    }
}

//dom ready
$(function () {
    notOut.init();
});