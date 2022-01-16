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

    var backAnimation = new TweenMax.to('#first-section', .5, {
        scale: 1.2,
        ease: Circ.easeIn,
        opacity: 0,
        webkitFilter:"blur(2px)",
        y: '-50rem'
    })

    timeline.add(titleAnimation, "first").add(headerAnimation).add(backAnimation)
    
    // Creating the scroll interations for the first section
    new ScrollMagic.Scene({
        duration: 1300,
        offset: 0
    })
    .setPin('#first-section')
    .setTween(timeline)
    .addTo(controller);

    var timelinePortfolio = new TimelineMax();
    var portolfioTitleAnimation = new TweenMax.from('#portfolio', .2, {
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
    var portolfioTitleAnimationEnd = new TweenMax.to('#portfolio', .3, {
        scale: 1,
        x: '-10vw',
        ease: Circ.easeIn,
        opacity: 0
    });

    timelinePortfolio
        .add(portolfioTitleAnimation, "first")
        .add(portolfioAnimation, "second")
        .add(portolfioAnimation2, "second")
        .add(cardAnimation1, 'second')
        .add(cardAnimation2, 'second')
        .add(cardAnimation3, 'second')
        .add(cardAnimation4, 'second')
        .add(cardAnimation5, 'second')
        .add(cardAnimation6, 'second')
        .add(portolfioTitleAnimationEnd, 'third')

    new ScrollMagic.Scene({
        triggerElement: "#second-section",
        duration: 3500,
        triggerHook: 0
    })
    .setPin('#second-section')
    .setTween(timelinePortfolio)
    .addTo(controller)


    // Creating the scroll interations for the first section
    var timelineNosotros = new TimelineMax();
    var nosotrosTitleAnimation = new TweenMax.from('#nosotros', 1, {
        scale: 1,
        y: '10vh',
        ease: Circ.easeOut,
        opacity: 0
    });

    timelineNosotros
        .add(nosotrosTitleAnimation, "first")

    new ScrollMagic.Scene({
        duration: 1300,
        triggerElement: '#third-section',
        triggerHook: 0
    })
    .setPin('#third-section')
    .setTween(timelineNosotros)
    .addTo(controller);
});