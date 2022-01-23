$(document).ready(() => {

    // init controller
    var controller = new ScrollMagic.Controller();
    var timeline = new TimelineMax();
    var titleAnimation = new TweenMax.to('#title', 1.2, {
        scale: .92,
        y: '-15rem',
        ease: Circ.easeIn,
        opacity: 0
    })
    var headerAnimation = new TweenMax.to('.landing-header', 1, {
        scale: .95,
        y: '-8rem',
        ease: Circ.easeIn,
        opacity: 0
    })

    var backAnimation = new TweenMax.to('#first-section', .85, {
        scale: 1.2,
        ease: Circ.easeIn,
        opacity: 0,
        webkitFilter:"blur(2px)",
        y: '-50rem'
    })

    timeline.add(titleAnimation, "first").add(headerAnimation).add(backAnimation)
    
    // Creating the scroll interations for the first section
    new ScrollMagic.Scene({
        duration: 1000,
        offset: 0
    })
    .setPin('#first-section')
    .setTween(timeline)
    .addTo(controller);

    var timelinePortfolio = new TimelineMax();
    var portolfioTitleAnimation = new TweenMax.from('#portfolio', .65, {
        scale: 1,
        x: '-10vw',
        ease: Power1.easeInOut,
        opacity: 0
    });

    var portolfioAnimation2 = new TweenMax.from('.portfolio-container', .6, 
    {
        opacity: 0
    });

    var portolfioAnimation = new TweenMax.to('.portfolio-container', 2.5, 
    {
        scale: 1,
        x: '-270vw',
        webkitFilter:"blur(0px)",
        ease: Power0.easeInOut
    });

   
    var portolfioTitleAnimationEnd = new TweenMax.to('#portfolio', .7, {
        scale: 1,
        x: '-10vw',
        opacity: 0,
        delay: 2.5,
        ease: Power2.easeIn
    });
    var lines1SectionAnimation = new TweenMax.from('#lines2', 1, {
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 0,
        blur: '3px',
        index: 0
    });

    var lines1SectionAnimationTo = new TweenMax.to('#lines2', .8, {
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 2.1,
        blur: '3px',
        index: 0
    });

    timelinePortfolio
        .add(portolfioTitleAnimation, "first")
        .add(lines1SectionAnimation, "first")
        .add(portolfioAnimation, "first")
        .add(portolfioAnimation2, "first")
        .add(portolfioTitleAnimationEnd, 'first')
        .add(lines1SectionAnimationTo, "first")

    new ScrollMagic.Scene({
        triggerElement: "#second-section",
        duration: 2900,
        triggerHook: 0
    })
    .setPin('#second-section')
    .setTween(timelinePortfolio)
    .addTo(controller)


    // Creating the scroll interations for the second section
    var timelineNosotros = new TimelineMax();
    var nosotrosTitleAnimation = new TweenMax.from('#nosotros', 1, {
        scale: 1,
        y: '10vh',
        ease: Circ.easeOut,
        opacity: 0
    });

    var nosotrosSectionAnimation = new TweenMax.from('#about-us-container', 1.5, {
        scale: 1,
        y: '15vh',
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 0.5
    });

    var nosotrosTitleAnimationTo = new TweenMax.to('#nosotros', 1.5, {
        scale: 1,
        y: '-15vh',
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 0.5
    });

    var nosotrosSectionAnimationTo = new TweenMax.to('#about-us-container', 1.5, {
        scale: 1,
        y: '-15vh',
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 0.5
    });

    var lines2SectionAnimation = new TweenMax.from('#lines1', 1.5, {
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 0.3,
        blur: '3px',
        index: 0
    });

    var lines2SectionAnimationTo = new TweenMax.to('#lines1', 1.4, {
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 0.3,
        blur: '3px',
        index: 0
    });

    timelineNosotros
        .add(nosotrosTitleAnimation, "first")
        .add(nosotrosSectionAnimation, "first")
        .add(lines2SectionAnimation, "first")
        .add(nosotrosTitleAnimationTo, "second")
        .add(nosotrosSectionAnimationTo, "second")
        .add(lines2SectionAnimationTo, "second")

    new ScrollMagic.Scene({
        duration: 1950,
        triggerElement: '#third-section',
        triggerHook: 0
    })
    .setPin('#third-section')
    .setTween(timelineNosotros)
    .addTo(controller);

    // Creating the scroll interations for the last section
    var timelineContacto = new TimelineMax();
    var contactoTitleAnimation = new TweenMax.from('#contacto', 1, {
        scale: 1,
        y: '10vh',
        ease: Power1.easeOut,
        opacity: 0
    });

    var contactoSectionAnimation = new TweenMax.from('#contact-container', 1, {
        scale: 1,
        y: '15vh',
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 0,
        index: 1
    });

    var linesSectionAnimation = new TweenMax.from('#lines3', 1, {
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 0.3,
        blur: '3px'
    });

    timelineContacto
        .add(contactoTitleAnimation, "first")
        .add(contactoSectionAnimation, "first")
        .add(linesSectionAnimation, "first")

    new ScrollMagic.Scene({
        duration: 1000,
        triggerElement: '#fourth-section',
        triggerHook: 0
    })
    .setPin('#fourth-section')
    .setTween(timelineContacto)
    .addTo(controller);

    var timelineFooter = new TimelineMax();
    var footerAnimation = new TweenMax.from('footer', 1, {
        scale: 1,
        y: '10vh',
        ease: Power1.easeOut,
        opacity: 0
    });

    timelineFooter
        .add(footerAnimation, "first")

    new ScrollMagic.Scene({
        duration: 1000,
        triggerElement: 'footer',
        triggerHook: 0
    })
    .setPin('footer')
    .setTween(timelineFooter)
    .addTo(controller);
});