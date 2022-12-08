$(document).ready(function () {
	gsap.registerPlugin(ScrollTrigger);

    let $showcaseSlide = $(".showcase__slide");

	select = (e) => document.querySelector(e);
	selectAll = (e) => document.querySelectorAll(e);

	$showcaseSlide.flickity({
		// cellAlign: "center",
		contain: true,
		initialIndex: 1,
		prevNextButtons: false,
		pageDots: false,
		wrapAround: true,
		autoPlay: true,
		// pauseAutoPlayOnHover: true,
	});

	function initBanner() {
        const splitH1 = new SplitType("h1", { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

		let tl = gsap.timeline({ delay: 0.2 });
		tl.from("h1", {
			ease: "power4",
			y: "+=5vh",
			duration: 2,
		}).from("h1 .line__inner", {
			ease: "power4",
			y: 200,
			duration: 1.5,
		}, "<= 0");
	}

	function initIntro() {
		const DOM = {
			stage: select(".intro"),
			headline: select(".intro__content .headline"),
			h2: select("h2"),
			desc: select(".intro__content-desc"),
 			img: select(".intro__img img"),

			statisticNumber: selectAll(".intro .statistic-number"),
			statisticDesc: selectAll(".intro .statistic-desc"),

			textItem: selectAll(".intro__textWrap p"),
		};

		const splitHeadline = new SplitType(DOM.headline, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
		const splitH2 = new SplitType(DOM.h2, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

		const splitStatisticNumber = new SplitType(DOM.statisticNumber, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.stage,
				start: "top 70%",
			},
		});

		let tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.desc,
				start: "top 85%",
			},
		});

		let tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.img,
				start: "top 5%",
			},
		});

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
				DOM.h2,
				{
					ease: "power4",
					y: "+=5vh",
					duration: 2,
				},
				"<= .3"
			)
			.from(
				DOM.h2.querySelector(".line__inner"),
				{
					ease: "power4",
					y: 200,
					duration: 1.5,
				},
				"<= 0"
			)
			.from(DOM.desc, {
				ease: "power4",
				opacity: 0,
				y: "+=5vh",
				duration: 2,
			}, "<= 0.5");

		tl2.from(DOM.statisticNumber, {
			ease: "power4",
			y: "+=5vh",
			duration: 2,
			stagger: 0.2,
		})
			.from(
				".intro .statistic-number .line__inner",
				{
					ease: "power4",
					y: 200,
					duration: 1.5,
					stagger: 0.2,
				},
				0
			)
			.from(
				DOM.statisticDesc,
				{
					ease: "power4",
					opacity: 0,
					y: "+=5vh",
					duration: 2,
					stagger: 0.1,
				},
				"<= 0.5"
			)
			.from(
				DOM.img,
				{
					ease: "power4",
					opacity: 0,
					scale: 1.04,
					filter: "blur(3px)",
					y: "+=5vh",
					duration: 2.5,
				},
				"<= 0.3"
		);

		tl3.from(DOM.textItem, {
			ease: "power4",
			y: "+=5vh",
			opacity: 0,
			duration: 1.5,
			stagger: 0.2
		}, 0);
	}

	function initSolution() {
		const DOM = {
			stage: select(".solution"),

			headline: select(".solution .headline"),
			h2: select(".solution h2"),

			imgLeft: select(".solution #solution-img1"),
			imgCenter: select(".solution #solution-img2"),
			imgRight: select(".solution #solution-img3"),

			textSolution: selectAll(".solution__textWrap p")
		};

		const splitHeadline = new SplitType(DOM.headline, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
		const splitH2 = new SplitType(DOM.h2, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.stage,
				start: "top 60%",
			},
		});

		let tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.h2,
				start: "top 48%",
			},
		});

		let tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.imgCenter,
				start: "top 50%",
			},
		});
		tl1.from(
			DOM.headline,
			{
				ease: "power4",
				y: "+=5vh",
				duration: 1.8,
			},
			0
		)
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
				DOM.h2,
				{
					ease: "power4",
					y: "+=5vh",
					duration: 2,
				},
				"<= .3"
			)
			.from(DOM.h2.querySelector(".line__inner"), {
				ease: "power4",
				y: 200,
				duration: 1.5,
			}, "<= 0");
		tl2.from(DOM.imgCenter, {
			ease: "power4",
			opacity: 0,
			y: 50,
			duration: 1.5,
		}, 0)
			.from(DOM.imgLeft, {
				ease: "power4",
				opacity: 0,
				x: 50,
				duration: 2,
			}, "<= 0.5")
			.from(
				DOM.imgRight,
				{
					ease: "power4",
					opacity: 0,
					x: -50,
					duration: 2,
				},
				"<= 0"
			);

		tl3.from(DOM.textSolution, {
			ease: "power4",
			y: "+=5vh",
			opacity: 0,
			duration: 1.5,
			stagger: 0.2,
		}, 0);
	}

	function initShowcase() {
		const DOM = {
			stage: select(".showcase"),

			h2: select(".showcase h2"),
			desc: select(".showcase__content p"),

			showcaseSlide: select(".showcase__slide"),
		};

		const splitH2 = new SplitType(DOM.h2, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.stage,
				start: "top 60%",
			}
		})

		let tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.showcaseSlide,
				start: "top 80%",
			},
		});

		tl1.from(
			DOM.h2,
			{
				ease: "power4",
				y: "+=5vh",
				duration: 2,
			},
			0
		)
			.from(
				DOM.h2.querySelector(".line__inner"),
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
					x: -100,
					duration: 2.5,
				},
				0.3
		);

		tl2.from(DOM.showcaseSlide, {
			ease: "power4",
			opacity: 0,
			y: 100,
			duration: 3,
		});
	}

	function initQuote() {
		const DOM = {
			stage: select(".quote"),

			circle: select(".quote .circle"),
			content: selectAll(".quote p"),
		};

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.stage,
				start: "top 60%",
			},
		});

		tl.from(DOM.circle, {
			ease: "power4",
			scale: 0.85,
			opacity: 0,
			duration: 1.5
		}, 0).from(DOM.content, {
			ease: "power4",
			y: 30,
			opacity: 0,
			duration: 2,
			stagger: 0.4
		}, "<= 0.5");
	}

	function initTeam() {
		const DOM = {
			stage: select(".team"),

			headline: select(".team__content .headline"),
			h2: select(".team h2"),
			desc: select(".team__content-desc"),

			btn: select(".team a"),

			libraries: selectAll(".team__libraries .img"),
		};

		const splitHeadline = new SplitType(DOM.headline, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
		const splitH2 = new SplitType(DOM.h2, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.stage,
				start: "top 60%",
			}
		})

		let tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.libraries,
				start: "top 80%",
			},
		});

		tl1.from(
			DOM.headline,
			{
				ease: "power4",
				y: "+=5vh",
				duration: 1.8,
			},
			0
		)
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
				DOM.h2,
				{
					ease: "power4",
					y: "+=5vh",
					duration: 2.5,
				},
				"<= 0.5"
			)
			.from(
				DOM.h2.querySelector(".line__inner"),
				{
					ease: "power4",
					y: 200,
					duration: 2,
				},
				"<= 0"
			)
			.from(
				DOM.desc,
				{
					ease: "power4",
					opacity: 0,
					y: 50,
					duration: 1.5,
				},
				"<= 0.8"
			)
			.from(
				DOM.btn,
				{
					ease: "power4",
					opacity: 0,
					y: 50,
					duration: 1.5,
				},
				"<= 0.3"
		);

		tl2.from(DOM.libraries, {
			ease: "power4",
			opacity: 0,
			y: 50,
			duration: 2.5,
			stagger: 0.2
		}, 0.5);
	}

	function initEfficiency() {
		const DOM = {
			stage: select(".efficiency"),

			headline: select(".efficiency__content .headline"),
			h2: select(".efficiency h2"),
			desc: select(".efficiency .right p"),

			point: selectAll(".efficiency .point"),

			chartStage: select(".efficiency__chart"),

			chartLine: selectAll(".efficiency__chart-wrap .dash-line"),
			chartColumn: selectAll(".efficiency__chart-item"),
		};

		const splitHeadline = new SplitType(DOM.headline, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
		const splitH2 = new SplitType(DOM.h2, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.stage,
				start: "top 80%",
			},
		});

		let tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: DOM.chartStage,
				start: "top 86%",
			},
		});

		tl1.from(
			DOM.headline,
			{
				ease: "power4",
				y: "+=5vh",
				duration: 1.8,
			},
			0
		)
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
				DOM.h2,
				{
					ease: "power4",
					y: "+=5vh",
					duration: 2,
				},
				"<= .3"
			)
			.from(
				DOM.h2.querySelector(".line__inner"),
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
					x: -50,
					duration: 2,
				},
				1
			)
			.from(DOM.point, {
				ease: "power4",
				opacity: 0,
				x: -50,
				duration: 1.8,
				stagger: 0.2,
			}, "<= 0.5");

		tl2.from(
			DOM.chartColumn,
			{
				ease: "power4",
				opacity: 0,
				x: -50,
				duration: 1.8,
				stagger: 0.2,
			},
			0
		).from(
			DOM.chartLine,
			{
				ease: "power4",
				filter: "blur(1px)",
				borderColor: "rgba(47, 66, 115, 0.8)",
				y: -200,
				duration: 2,
				stagger: 0.3,
			},
			"<= 0.5"
		);

	}

	function initParallax() {
		const DOM = {
			bannerSection: select(".banner"),
			bannerImg: select(".banner .banner__img img"),

			footer: select(".footer"),
		};

		gsap.fromTo(
			DOM.bannerImg,
			{
				y: "-20vh",
			},
			{
				y: "20vh",
				scrollTrigger: {
					trigger: DOM.bannerSection,
					scrub: true,
					start: "-90px bottom",
				},
				ease: "none",
			}
		);
	}

	function init() {
		initBanner();
		initIntro();
		initSolution();
		initShowcase();
		initQuote();
		initTeam();
		initEfficiency();
		initParallax();
	}
	init();
})