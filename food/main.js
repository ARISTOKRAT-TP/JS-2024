const tl = gsap.timeline()

tl.fromTo('.front-photo', {
    x: 100,
    opacity: 1,
    rotate: 0,
    duration: 1
}, {
    x: 0,
    opacity: 1,
    duration: 1,
    rotate: 0

}).fromTo('.t1', {
    x: -100,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    duration: 1
},
1
).fromTo('.t3', {
    y: 50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 1
}).fromTo('.t2', {
    y: 50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 1
}).fromTo('.logo1', {
    y: -50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 1
},
3).fromTo('.mynavbar1 li', {
    y: -50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15
}).fromTo('.searching', {
    y: -50,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 1,
})

gsap.registerPlugin(ScrollTrigger);

gsap.to('.front-text', {
    scrollTrigger: {
        trigger: '.header1',
        start: 'top top ',
        scrub: true,
    },
    yPercent: 10,
     scale: 0.5, 
     xPercent: -80,
     opacity: 0,
})
gsap.to('.front-photo', {
    scrollTrigger: {
        trigger: '.header1',
        start: 'top top ',
        scrub: true,
    },
     xPercent: -80,
     rotate: 180
})

gsap.from('.card', {
    scrollTrigger: {
        trigger: '.cards', 
        start: '5% center',
        end: '+=300px',
        scrub: true
    },
    scale: 0,
    opacity: 0,
    travsformOrigin: 'left bottom',
    ease: 'none',
    stagger: 1,
    duration: 1
})

gsap.from('.eat-title', {
    scrollTrigger: {
        trigger: '.cards', 
        start: '5% center',
        end: '+=300px',
        scrub: true
    },
    scale: 0,
    opacity: 0,
    travsformOrigin: 'top bottom',
    ease: 'none',
    stagger: 1,
    duration: 1
})

gsap.to('.img-parr', {
    scrollTrigger: {
        trigger: '.sh',
        scrub: true,
    },
    yPercent: -10,
})
gsap.to('.text-parr', {
    scrollTrigger: {
        trigger: '.sh',
        scrub: true,
    },
    yPercent: 15,
})
const items = gsap.utils.toArray('.imgPack')

gsap.to( items, {
    scrollTrigger: {
        trigger: '.photos',
        start: '-30% center',
        scrub: true,
    },
    xPercent: -250,
})