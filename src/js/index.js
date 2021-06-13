import $ from "jquery"
import "waypoints/lib/noframework.waypoints.min.js"
import "./libs"
import barba from '@barba/core'
import gsap from "gsap"

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

	let tlHeader = new TimelineMax()
	tlHeader
		.to($('header .logo-wrap img'), 1, { opacity: 1 }, 0)
		.to($('header .logo-wrap'), 1, { width: 220 }, 1)
		.to($('header'), 1, { height: 150 }, 1)
		.to($('header .row1'), 1, { height: 100 }, 1)

		.to($('header .line'), 1.5, { width: 0 }, 1.6)
		.to($('header .row2'), 0.1, { opacity: 1, height: 45 }, 2)
		.staggerTo($('header ul li'), 1, { opacity: 1, x: 0 }, 0.3, 1.2)
	// setTimeout(function () {
	//     $('body').addClass('animated')
	//     $('.preloader').addClass('close')
	// }, 1000)

	// $.each($('.myAnimate'), function () {
	//     let self = this
	//     new Waypoint({
	//         element: $(self)[0],
	//         handler: function () {
	//             $(self).addClass('active')
	//         },
	//         offset: '90%'
	//     })
	// })

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
						});
				}, 1000)
			}
		}]
	})
}
