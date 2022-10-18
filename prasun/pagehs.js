
        var card = document.getElementById('card');

        var rule = CSSRulePlugin.getRule(".card::before");
        var rule2 = CSSRulePlugin.getRule(".card::after");

        var tl = gsap.timeline({defaults: {ease: "power2.inOut"}});

        tl.to(rule, {
            width: '100%'
        })
        tl.to(rule2, {
            width: '100%'
        }, "-=.3")
        tl.to('h1', {
            color: 'white'
        }, "-=.7")
        tl.to('p', {
            'clipPath': 'circle(140% at 0% 100%)',
            'transform': 'translateX(0)',
            ease: Back.easeOut.config(4),
        }, "-=.3")
        tl.pause();

        card.addEventListener('mouseenter', () => {
            tl.play();
        })
        card.addEventListener('mouseleave', () => {
            tl.reverse();
        })
