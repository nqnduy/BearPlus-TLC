/////////////////////////// SCROLL ///////////////////////////////
$(document).ready(function () {
    let header = $('.header'),
        btnMenu = $('.header__btnmenu'),
        screen = {
            mobile: 767,
            tablet: 991,
            desktop: 1199
        };

    // DETECT DEVICE
    function mobileDetect() {
        let md = new MobileDetect(window.navigator.userAgent);
        if (md.mobile() != null || md.tablet() != null) {
            mobile = true
            tablet = true
        } else {
            mobile = false
            tablet = false
        }
    }
    mobileDetect();


    // WINDOW SCROLLING
    $(window).on('scroll', function () {

    })


    // INIT
    function init() {
        $('body').imagesLoaded()
            .progress({ background: true }, function (instance, image) { })
            .always(function (instance) {
                $('.loading').addClass('--hide')
            })
            .fail(function () {
                // console.log('all images loaded, at least one is broken');
            })
            .done(function (instance) {
                // console.log('all images successfully loaded');
            });
    }
    init();

    let $weDoSlider = $('#weDo-slider');
    let $weDoSliderMb = $('#weDo-sliderMb');

    $weDoSlider.flickity({
			cellAlign: "center",
			contain: true,
			wrapAround: true,
			initialIndex: 1,
			prevNextButtons: false,
			pageDots: false,
    });

    $weDoSliderMb.flickity({
        cellAlign: "left",
        contain: true,
        wrapAround: true,
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
    });

    $(".control-left").on("click", function () {
        $weDoSlider.flickity("previous");
		});
    $(".control-right").on("click", function () {
        $weDoSlider.flickity("next");
    });

    let $hamburger = $("#hamburger");

    $hamburger.click(function () {
        $("body").toggleClass("openNav");
    })

    let $introSlider = $("#intro-slider");
    $introSlider.flickity({
			cellAlign: "center",
			contain: true,
			wrapAround: true,
			initialIndex: 1,
			prevNextButtons: false,
			pageDots: false,
		});
    // let $mainButton = $(".btnMain");
    // $mainButton.forEach(function () {
    //     button.innerHTML =
    // })
    // document.querySelectorAll(".btnMain").forEach((button) =>
    //     (button.innerHTML = "<div><span>" + button.textContent.split("").join("</span><span>") + "</span></div>")
    // );

    let lastScrollTop = 0;
    $(window).scroll(function (e) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            if (st > 440) {
                $("header").addClass("hide");
            }
        }
        else {
            if (st > 440) {
                $("header").addClass("hide");
                $("header").removeClass("hide");
            }
        }
        lastScrollTop = st;
    })
})
