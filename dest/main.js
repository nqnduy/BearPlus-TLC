/////////////////////////// SCROLL ///////////////////////////////


$(document).ready(function () {

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(ScrollToPlugin);
	gsap.registerPlugin(Flip);

	let header = $(".header"),
		btnMenu = $(".header__btnmenu"),
		screen = {
			mobile: 767,
			tablet: 991,
			desktop: 1199,
		};

	// DETECT DEVICE
	function mobileDetect() {
		let md = new MobileDetect(window.navigator.userAgent);
		if (md.mobile() != null || md.tablet() != null) {
			mobile = true;
			tablet = true;
		} else {
			mobile = false;
			tablet = false;
		}
	}
	mobileDetect();

	// WINDOW SCROLLING
	$(window).on("scroll", function () {});

	let $weDoSlider = $("#weDo-slider");
	let $weDoSliderMb = $("#weDo-sliderMb");

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
	});

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
		} else {
			if (st > 440) {
				$("header").addClass("hide");
				$("header").removeClass("hide");
			}
		}
		lastScrollTop = st;
	});

	select = (e) => document.querySelector(e);
	selectAll = (e) => document.querySelectorAll(e);

    function initBanner() {
        const splitH1 = new SplitType("h1", { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
        const splitTextWrap = new SplitType(".banner .banner__text-right p", { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
        const splitBtn = new SplitType(".banner a", { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

		let tl = gsap.timeline({ delay: 0.2 });
		tl.from("h1", {
			ease: "power4",
			y: "+=5vh",
			duration: 2.5,
		})
			.from(
				"h1 .line__inner",
				{
					y: 200,
					duration: 2,
					ease: "power4",
					stagger: 0.1,
				},
				0
			)
			.from(
				".home .banner .banner__text-right p",
				{
					ease: "power4",
					y: "+=5vh",
					duration: 2.5,
				},
				"<= .5"
			)
			.from(
				".banner .banner__text-right p .line__inner",
				{
					y: 200,
					duration: 2,
					ease: "power4",
					stagger: 0.1,
				},
				0
			)
			.from(
				".banner a",
				{
					ease: "power4",
					y: "+=5vh",
					duration: 2.5,
				},
				"<= .6"
			)
			.from(
				".banner a .line__inner",
				{
					y: 200,
					duration: 2,
					ease: "power4",
					stagger: 0.1,
				},
				0
			)
            .set(["h1",
                ".banner .banner__text-right p",
                ".banner .line__inner", ".banner .btnMain"], { clearProps: "all" });
	}

    function initIntro() {
        const splitTitle = new SplitType(".intro h3", { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: (".intro"),
				start: "top 60%",
            }
		});

		let tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: ".intro__showcase-item-img",
				start: "bottom 90%",
			},
		});

		tl1
			.from(
				".intro h3",
				{
					ease: "power4",
					y: "+=5vh",
					duration: 2,
				},
			)
			.from(".intro h3 .line__inner", {
				y: 200,
				duration: 1.5,
				ease: "power4",
				stagger: 0.1,
			}, 0)
			.to(
				".intro__showcase-item-img",
				{
					duration: 0.8,
					ease: "power4",
					clipPath: "inset(0% 0% 0% 0%)",
					stagger: 0.1,
				},
				"<= .5"
		);
		tl2.from(".intro__showcase-item .text-default", {
			duration: 0.8,
			ease: "power4",
			opacity: 0,
			y: "-20",
			stagger: 0.2,
		})
	}

	function initWeDo() {
		const splitHeadline = new SplitType(".weDo__content .headline", { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
        const splitH2 = new SplitType(".weDo h2", { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

		let tl = gsap
			.timeline({
				scrollTrigger: {
					trigger: ".weDo",
					start: "top 70%",
				},
			});
		let taglineTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".weDo__library",
				start: "top 20%",
			}
		})
		tl
			.from(".weDo__content .headline", {
				ease: "power4",
				y: "+=5vh",
				duration: 1.8,
			})
			.from(
				".weDo__content .headline .line__inner",
				{
					ease: "power4",
					y: 200,
					duration: 1.3,
				},
				"<= 0"
			)
			.from(
				".weDo h2",
				{
					ease: "power4",
					y: "+=5vh",
					duration: 2,
				},
				"<= 0.5"
			)
			.from(
				".weDo h2 .line__inner",
				{
					ease: "power4",
					y: 200,
					duration: 1.5,
				},
				"<= 0"
			)
			.from(
				".weDo__wrapText-right",
				{
					ease: "power4",
					opacity: 0,
					y: -50,
					duration: 1.5,
				},
				0.8
			)
			.from(
				".weDo a",
				{
					ease: "power4",
					opacity: 0,
					y: -20,
					duration: 1.5,
				},
				"<= 0.5"
			)
			.from(".weDo__library", {
				ease: "power4",
				opacity: 0,
				y: "+=5vh",
				duration: 1.5,
			}, "<= 0.2");

		taglineTl.from(".weDo__tagline", {
			ease: "power4",
			y: "+=5vh",
			duration: 1,
		});
	}

	function initProcess() {
        const splitHeadline = new SplitType(".process .headline", { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
        const splitTitle = new SplitType(".process h2", { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
		const splitTitleStep = new SplitType(".process h4", { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
		const slitNumberStep = new SplitType(".process .number", { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

		let pinWeDo = gsap.timeline({
			scrollTrigger: {
				trigger: ".weDo",
				start: "bottom 40%",
				end: "+=250",
				pin: true,
				pinSpacing: false
			},
		});
		let processTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".process",
				start: "top 70%",
			},
		});

		processTl
			.from(".process .headline", {
				ease: "power4",
				y: "+=5vh",
				duration: 1.8,
			})
			.from(
				".process .headline .line__inner",
				{
					ease: "power4",
					y: 200,
					duration: 1.3,
				},
				"<= 0"
			)
			.from(
				".process h2",
				{
					ease: "power4",
					y: "+=5vh",
					duration: 2,
				},
				" <= 0.5"
			)
			.from(
				".process h2 .line__inner",
				{
					ease: "power",
					y: 200,
					duration: 1.5,
					stagger: 0.1,
				},
				"<= 0"
			)
			.from(
				".process__content-desc",
				{
					ease: "power4",
					opacity: 0,
					y: "+=5vh",
					duration: 2,
				},
				0.8
		);

		let processStepTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".process__content-desc",
				start: "top 70%",
			},
		});

		processStepTl
			.from(".process__content-step .number", {
				ease: "power4",
				y: "+=200",
				filter: "blur(6px)",
				duration: 2.5,
				stagger: 0.2,
			})
			.from(
				".process__content-step .number .line__inner",
				{
					ease: "power4",
					y: 200,
					duration: 2,
					stagger: 0.2,
				},
				"<= 0"
			)
			.from(
				".process__content-step .img",
				{
					ease: "power4",
					y: 20,
					opacity: 0,
					duration: 1.5,
					stagger: 0.1,
				},
				"<= 0.5"
			)
			.from(
				".process__content-step h4",
				{
					ease: "power4",
					y: "+=5vh",
					duration: 2.5,
					stagger: 0.1,
				},
				"<= 0"
			)
			.from(
				".process__content-step h4 .line__inner",
				{
					ease: "power4",
					y: 200,
					duration: 2,
					stagger: 0.1,
				},
				"<= 0"
			)
			.from(
				".process__content-step .text-default",
				{
					ease: "power4",
					opacity: 0,
					y: "+=5vh",
					duration: 2.5,
					stagger: 0.2,
				},
				"<= 0.5"
			)
	}

	function initGuarantee() {
		const DOM = {
			section: select(".guarantee"),

			headline: select(".guarantee .headline"),

			title: select(".guarantee h2"),

			desc: select(".guarantee__content .text-default"),

			guaranteeList: select(".guarantee__list"),
			guaranteeItem: selectAll(".guarantee__item .wrap-hidden")
		};

		const splitHeadline = new SplitType(DOM.headline, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
		const splitTitle = new SplitType(DOM.title, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.section,
				start: "top 60%",
			},
		});

		let guaranteeListTl = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.desc,
				start: "top 70%",
			}
		})

		tl1.from(DOM.headline, {
			ease: "power4",
			y: "+=5vh",
			duration: 1.8,
		})
			.from(
				DOM.headline.querySelector(".line__inner"),
				{
					ease: "power4",
					y: 200,
					duration: 1.3,
				},
				"<= 0"
			)
			.from(
				DOM.title,
				{
					ease: "power4",
					y: "+=5vh",
					duration: 2,
				},
				"<= 0.5"
			)
			.from(
				DOM.title.querySelector(".line__inner"),
				{
					ease: "power4",
					y: 200,
					duration: 1.5,
				},
				"<= 0"
			)
			.from(
				DOM.desc,
				{
					ease: "power4",
					opacity: 0,
					y: "+=5vh",
					duration: 2,
				},
				0.8
		);
		guaranteeListTl
			.set(DOM.guaranteeList, {
				pointerEvents: "none",
			})
			.from(
				DOM.guaranteeItem,
				{
					ease: "power4",
					opacity: 0,
					y: 50,
					duration: 2,
					stagger: 0.2,
				},
				0
			)
			.to(DOM.guaranteeList, { pointerEvents: "auto" });
	}

	function initFooter() {
		const DOM = {
			stage: select(".footer"),
			background: select(".footer__bg"),
			title: select(".footer__content h2"),
			button: select(".footer__content a"),
			logo: select(".footer .logo"),
			inforItem: selectAll(".footer .infor__item"),
			menuItem: selectAll(".footer .menu-item")
		}

		const splitTitle = new SplitType(DOM.title, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

		tl = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.stage,
				start: "top 60%",
				markers: true
			}
		})

		tl.from(DOM.title, {
			ease: "power4",
			y: "+=5vh",
			duration: 2,
		}).from(
			DOM.title.querySelectorAll(".line__inner"),
			{
				ease: "power4",
				y: 200,
				duration: 1.5,
				stagger: 0.1,
			},
			0
		).from(
			DOM.logo, {
				ease: "power4",
				opacity: 0,
				y: 50,
				duration: 1.5,
			}, "<= 0.5"
		).from(
			DOM.inforItem, {
				ease: "power4",
				opacity: 0,
				y: 50,
				duration: 1.5,
				stagger: 0.1
			}, "<= 0.5"
		).from(
			DOM.menuItem, {
				ease: "power4",
				opacity: 0,
				y: 50,
				duration: 1.5,
				stagger: 0.1
			}, "<= 0.5"
		);

	}

	function initParallax() {
		const DOM = {
			bannerSection: select(".banner"),
			bannerImg: select(".banner .banner__img img"),

			footer: select(".footer"),
		}

		gsap.fromTo(
			DOM.bannerImg,
			{
				y: "-30vh",
			},
			{
				y: "30vh",
				scrollTrigger: {
					trigger: DOM.bannerSection,
					scrub: true,
					start: "-90px bottom",
				},
				ease: "none",
			},
		);
		gsap.fromTo(
			DOM.footer.querySelector(".footer__bg img"),
			{
				y: "-20vh",
			},
			{
				y: "20vh",
				scrollTrigger: {
					trigger: DOM.footer,
					scrub: true,
					start: "top 100%",
				},
				ease: "none",
			}
		);
	}

	function init() {
		$("body")
			.imagesLoaded()
			.progress({ background: true }, function (instance, image) {})
			.always(function (instance) {
				$(".loading").addClass("--hide");
			})
			.fail(function () {
				// console.log('all images loaded, at least one is broken');
			})
			.done(function (instance) {
				// console.log('all images successfully loaded');
            });

		initBanner();
		initParallax();
		initIntro();
		initWeDo();
		initProcess();
		initGuarantee();
		initFooter();
        // demo();
	}
	init();
})
