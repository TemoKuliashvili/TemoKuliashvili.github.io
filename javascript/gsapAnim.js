const tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});


// intro section
tl.to(".home-intro-text", {
    y: "0%",
    duration: 1,
    stagger: 0.25
});
tl.to(".home-intro-slider", {
    y: "-100%",
    duration: 1.5,
    delay: 0.5
});
tl.to(".home-intro", {
    y: "-100%",
    duration: 1
}, "-=1.2");
tl.fromTo(".nav__link", {
    opacity: 0
}, {
    opacity: 1,
    duration: 1,
    stagger: 0.15
}, "-=0.5");
tl.fromTo(".languageChanger", {
    opacity: 0
}, {
    opacity: 1,
    duration: 1,
}, "-=1");
tl.fromTo(".intro", {
    y: "50%"
}, {
    y: 0,
    duration: 1
}, "-=2.5");

// bubble scale
tl.fromTo(".bubble", {
    scale: 0
}, {
    scale: 1,
    duration: 0.7,
    stagger: 0.20
}, "-=1.2");

// about me section

gsap.to('.about__title-main', {
    scrollTrigger: {
        trigger: '.about__title-main',
        start: 'top 75%',
        end: () => 
            "+=" + document.querySelector('.about__icons-img').offsetWidth,
        scrub:2,
    },
    opacity: 1,
    x: '0%',
    duration: 1.5
})
gsap.to('.about__text', {
    scrollTrigger: {
        trigger: '.about__text',
        start: 'top 70%',
        end: () => 
            "+=" + document.querySelector('.about__icons-img').offsetWidth,
        scrub:2.5,
    },
    opacity: 1,
    x: '0%',
    delay: 0.7,
})
gsap.to('.aboutAnim', {
    scrollTrigger: {
        trigger: '.about__text',
        start: 'top 79%',
        end: () => 
            "+=" + document.querySelector('.about__icons-img').offsetWidth,
        scrub:2,
        delay: 0.7,
    },
    opacity: 1,
    x: '0%',
    delay: 0.7,
})
gsap.to('.about__icons-img', {
    scrollTrigger: {
        trigger: '.about__text',
        start: 'top 50%',
        end: () => 
            "+=" + document.querySelector('.about__icons-img').offsetWidth,
        scrub:2.5,
    },
    height: '60px',
    width: '60px',    
    stagger: 0.3,  
    ease: "back.out(1.7)",
})


// service
gsap.to('.service__card', {
    scrollTrigger: {
        trigger: '.services__cards',
        start: 'center 85%',
        end: () => 
            "+=" + document.querySelector('.service__card').offsetWidth,
        scrub:2,
    },
    y: '0%',
    stagger: '0.3'
})
gsap.to('.services-title', {
    scrollTrigger: {
        trigger: '.services-title',
        start: 'top 85%',
        end: 'top 75%',
        scrub:2,
    },
    y: '0%',
    stagger: '0.3'
})

// portfolio
gsap.to('.portfolio__card', {
    scrollTrigger: {
        trigger: '.portfolio__card',
        start: 'top 85%',
        end: 'top 70%',
        scrub:2.5,
    },
    opacity:1,
    stagger: '0.25'
})

gsap.to('.about__title-portfolio', {
    scrollTrigger: {
        trigger: '.about__title-portfolio',
        start: 'top 85%',
        end: 'top 75%',
        scrub:2,
    },
    x: '0%',
    stagger: '0.3'
})

// contact

gsap.to('.contactAnim', {
    scrollTrigger: {
        trigger: '.contactAnim',
        start: 'top 65%',
        end: 'top 55%',
        scrub:3,
    },
    x: '0%'
})
gsap.to('.social-link', {
    scrollTrigger: {
        trigger: '.contactAnim',
        start: 'top 85%',
        end: 'top 75%',
        scrub:3,
    },
    x: '0%',
    stagger: '0.2'
})
gsap.to('.about__title-contact', {
    scrollTrigger: {
        trigger: '.about__title-contact',
        start: 'top 85%',
        end: 'top 75%',
        scrub:3,
    },
    y: '0%',
    opacity: 1,
    stagger: '0.2'
})