import $ from "jquery"
import "waypoints/lib/noframework.waypoints.min.js"
import "./libs"
import barba from "@barba/core"
import gsap from "gsap"
import Rellax from "rellax"

$(document).ready(function () {
	const start = {
		animation: animationInit,
		other: otherInit,
		init: function () {
			this.animation()
			this.other()
		}
	}

	start.init()
})

const animationInit = () => {
	$('body').addClass('ready')
	$('.main').addClass('active')

	const logoTime = 0.25

	setTimeout(() => {
		let tlLogo = new TimelineMax()
		tlLogo
			.to($('.preloader .logo-top-3'), logoTime, { opacity: 1 }, 0)
			.to($('.preloader .logo-bottom-1'), logoTime, { opacity: 1 }, 0)

			.to($('.preloader .logo-top-3, .preloader .logo-bottom-1'), logoTime, { opacity: 0 }, logoTime)
			.to($('.preloader .logo-top-2, .preloader .logo-bottom-2'), logoTime, { opacity: 1 }, logoTime)

			.to($('.preloader .logo-top-2, .preloader .logo-bottom-2'), logoTime, { opacity: 0 }, logoTime * 2)
			.to($('.preloader .logo-top-1, .preloader .logo-bottom-3'), logoTime, { opacity: 1 }, logoTime * 2)

			.to($('.preloader .logo-top-2, .preloader .logo-bottom-2'), logoTime, { opacity: 1 }, logoTime * 3)

			.to($('.preloader .logo-top-3, .preloader .logo-bottom-1'), logoTime, { opacity: 1 }, logoTime * 4)

			.to($('.preloader .logo-top-1, .preloader .logo-bottom-3'), logoTime, { opacity: 0 }, logoTime * 5)

			.to($('.preloader .logo-top-2, .preloader .logo-bottom-2'), logoTime, { opacity: 0 }, logoTime * 6)

			.to($('.preloader .logo-top-3, .preloader .logo-bottom-1'), logoTime, { opacity: 0 }, logoTime * 7)
			.to($('.preloader .logo-top-1, .preloader .logo-bottom-3'), logoTime, { opacity: 1 }, logoTime * 7)

			.to($('.preloader .logo-top-1, .preloader .logo-bottom-3'), logoTime, { opacity: 0 }, logoTime * 8)
			.to($('.preloader .logo-top-2, .preloader .logo-bottom-2'), logoTime, { opacity: 1 }, logoTime * 8)

			.to($('.preloader .logo-top-1, .preloader .logo-top-3, .preloader .logo-bottom-1, .preloader .logo-bottom-3'), logoTime, { opacity: 1 }, logoTime * 9)
			//--------------------------------------------------------------
			.to($('.preloader .logo-romb-1, .preloader .logo-romb-7'), logoTime, { opacity: 1 }, 0)

			.to($('.preloader .logo-romb-1, .preloader .logo-romb-7'), logoTime, { opacity: 0 }, logoTime)
			.to($('.preloader .logo-romb-3, .preloader .logo-romb-5'), logoTime, { opacity: 1 }, logoTime)

			.to($('.preloader .logo-romb-3, .preloader .logo-romb-5'), logoTime, { opacity: 0 }, logoTime * 2)
			.to($('.preloader .logo-romb-2, .preloader .logo-romb-4, .preloader .logo-romb-6'), logoTime, { opacity: 1 }, logoTime * 2)

			.to($('.preloader .logo-romb-2, .preloader .logo-romb-4, .preloader .logo-romb-6'), logoTime, { opacity: 0 }, logoTime * 3)
			.to($('.preloader .logo-romb-1, .preloader .logo-romb-3, .preloader .logo-romb-5, .preloader .logo-romb-7'), logoTime, { opacity: 1 }, logoTime * 3)

			.to($('.preloader .logo-romb-1, .preloader .logo-romb-2, .preloader .logo-romb-3, .preloader .logo-romb-4, .preloader .logo-romb-5, .preloader .logo-romb-6, .preloader .logo-romb-7'), logoTime, { opacity: 1 }, logoTime * 4)

			.to($('.preloader .logo-romb-1, .preloader .logo-romb-2, .preloader .logo-romb-5'), logoTime, { opacity: 0 }, logoTime * 5)

			.to($('.preloader .logo-romb-3, .preloader .logo-romb-4, .preloader .logo-romb-7'), logoTime, { opacity: 0 }, logoTime * 6)

			.to($('.preloader .logo-romb-6'), logoTime, { opacity: 0 }, logoTime * 7)
			.to($('.preloader .logo-romb-1, .preloader .logo-romb-2, .preloader .logo-romb-5'), logoTime, { opacity: 1 }, logoTime * 7)

			.to($('.preloader .logo-romb-1, .preloader .logo-romb-2, .preloader .logo-romb-5'), logoTime, { opacity: 0 }, logoTime * 8)
			.to($('.preloader .logo-romb-3, .preloader .logo-romb-4, .preloader .logo-romb-7'), logoTime, { opacity: 1 }, logoTime * 8)

			.to($('.preloader .logo-romb-1, .preloader .logo-romb-2, .preloader .logo-romb-5, .preloader .logo-romb-6'), logoTime, { opacity: 1 }, logoTime * 9)

			.to($('.preloader'), logoTime, { opacity: 0 }, logoTime * 12)
	}, 1000)

	// setTimeout(function () {
	//     $('body').addClass('animated')
	//     $('.preloader').addClass('close')
	// }, 1000)

	// let isHeaderActive = function () {
	//     let top = $(window).scrollTop()
	//     if (top > 0) {
	//         $('header').addClass('active')
	//     } else {
	//         $('header').removeClass('active')
	//     }
	// }
	// isHeaderActive()

	// $(window).scroll(function () {
	//     isHeaderActive()
	// })
}

const otherInit = () => {
	barba.init({
		transitions: [{
			name: 'opacity-transition',
			leave(data) {
				// let tlPreloader = new TimelineMax()
				// tlPreloader
				// 	.to($('.mp_s1 a:first-child'), 1, { opacity: 0 })

				return gsap
					.to(data.current.container, {
						opacity: 0,
						duration: 1,
					})
			},
			enter(data) {
				setTimeout(() => {
					gsap
						.to(data.next.container, {
							opacity: 1,
							duration: 1,
						})

					otherFuncInit()
				}, 1000)
			}
		}]
	})

	let openCount = 0
	$('.burger-wrap').click(function () {
		++openCount
		if (openCount % 2 === 1) {
			$('.mob-menu, header').toggleClass('active')
		}
	})
	$('.mob-menu .back').click(function () {
		$('.mob-menu, header').removeClass('active')
	})

	$('.menu-wrap a').click(function (e) {
		if ($(this).hasClass('active')) {
			e.preventDefault()
			e.stopPropagation()
		}

		if ($('.mob-menu').hasClass('active')) {
			$('.mob-menu, header').removeClass('active')
		}

		$('.menu-wrap a').removeClass('active')
		$(this).addClass('active')
	})

	const videoUpdateHeight = () => {
		$('.video-wrap iframe').each(function () {
			const width = $(this).innerWidth()
			const height = width / 16 * 9
			$(this).css('height', `${height}px`)
		})
	}

	$(window).resize(function () {
		videoUpdateHeight()
	})

	const otherFuncInit = () => {
		videoUpdateHeight()
		new Rellax('.romb')

		$.each($('.myAnimate'), function () {
			let self = this
			new Waypoint({
				element: $(self)[0],
				handler: function () {
					$(self).addClass('active')
				},
				offset: '90%'
			})
		})
	}
	otherFuncInit()

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			$('.up').addClass('active')
		} else {
			$('.up').removeClass('active')
		}
	})

	$('.up').click(function () {
		$('html, body').animate({ scrollTop: 0 }, '300')
	})
}
