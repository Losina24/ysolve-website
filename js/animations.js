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
        duration: 1700,
        offset: 0
    })
    .setPin('#first-section')
    .setTween(timeline)
    .addTo(controller);

    var timelinePortfolio = new TimelineMax();
    var portolfioTitleAnimation = new TweenMax.from('#portfolio', .35, {
        scale: 1,
        x: '-10vw',
        ease: Circ.easeOut,
        opacity: 0
    });

    var portolfioAnimation2 = new TweenMax.from('.portfolio-container', .3, 
    {
        opacity: 0
    });

    var portolfioAnimation = new TweenMax.to('.portfolio-container', 3, 
    {
        scale: 1,
        x: '-350vw',
        webkitFilter:"blur(0px)",
        ease: Power1.easeInOut
    });

    // Post
    var cardAnimation1 = new TweenMax.to('#card1', .5,
    {
        scale: .25,
        webkitFilter:"blur(1px)",
        ease: Power1.easeInOut,
        delay: 1,
        opacity: 0
    });
    var cardAnimation2 = new TweenMax.to('#card2', .5, 
    {
        scale: .25,
        webkitFilter:"blur(1px)",
        ease: Power1.easeInOut,
        delay: 1.17,
        opacity: 0
    });
    var cardAnimation3 = new TweenMax.to('#card3', .5, 
    {
        scale: .25,
        webkitFilter:"blur(1px)",
        ease: Power1.easeInOut,
        delay: 1.35,
        opacity: 0
    });
    var cardAnimation4 = new TweenMax.to('#card4', .5, 
    {
        scale: .25,
        webkitFilter:"blur(1px)",
        ease: Power1.easeInOut,
        delay: 1.52,
        opacity: 0
    });
    var cardAnimation5 = new TweenMax.to('#card5', .5, 
    {
        scale: .25,
        webkitFilter:"blur(1px)",
        ease: Power1.easeInOut,
        delay: 1.7,
        opacity: 0
    });
    var cardAnimation6 = new TweenMax.to('#card6', .5, 
    {
        scale: .25,
        webkitFilter:"blur(1px)",
        ease: Power1.easeInOut,
        delay: 1.92,
        opacity: 0
    });
    var portolfioTitleAnimationEnd = new TweenMax.to('#portfolio', .4, {
        scale: 1,
        x: '-10vw',
        ease: Circ.easeIn,
        opacity: 0
    });
    var lines1SectionAnimation = new TweenMax.from('#lines2', 1.5, {
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 0.3,
        blur: '3px',
        index: 0
    });

    var lines1SectionAnimationTo = new TweenMax.to('#lines2', 1.5, {
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 0.3,
        blur: '3px',
        index: 0
    });

    timelinePortfolio
        .add(portolfioTitleAnimation, "first")
        .add(lines1SectionAnimation, "first")
        .add(portolfioAnimation, "second")
        .add(portolfioAnimation2, "second")
        .add(cardAnimation1, 'second')
        .add(cardAnimation2, 'second')
        .add(cardAnimation3, 'second')
        .add(cardAnimation4, 'second')
        .add(cardAnimation5, 'second')
        .add(cardAnimation6, 'second')
        .add(portolfioTitleAnimationEnd, 'third')
        .add(lines1SectionAnimationTo, "third")

    new ScrollMagic.Scene({
        triggerElement: "#second-section",
        duration: 3800,
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

    var lines2SectionAnimationTo = new TweenMax.to('#lines1', 1.5, {
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
    var timelineNosotros = new TimelineMax();
    var contactoTitleAnimation = new TweenMax.from('#contacto', 1, {
        scale: 1,
        y: '10vh',
        ease: Circ.easeOut,
        opacity: 0
    });

    var contactoSectionAnimation = new TweenMax.from('#contact-container', 1.5, {
        scale: 1,
        y: '15vh',
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 0.5
    });

    var linesSectionAnimation = new TweenMax.from('#lines3', 1.5, {
        ease: Power1.easeInOut,
        opacity: 0,
        delay: 0.3,
        blur: '3px',
        index: 0
    });

    timelineNosotros
        .add(contactoTitleAnimation, "first")
        .add(contactoSectionAnimation, "first")
        .add(linesSectionAnimation, "first")

    new ScrollMagic.Scene({
        duration: 1400,
        triggerElement: '#fourth-section',
        triggerHook: 0
    })
    .setPin('#fourth-section')
    .setTween(timelineNosotros)
    .addTo(controller);
});