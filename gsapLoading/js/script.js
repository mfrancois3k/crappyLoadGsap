var text = gsap.timeline({
    paused: false
});

text.from('.intro h1', 1,{
    opacity: 0,
    ease: "easeInOut",
    y: 50
});

text.to('.intro h1', 1,{
    opacity: 0,
    ease: "easeInOut",
    y: -50,
    delay: 1,
    onComplete: function(){
        TweenLite.delayedCall(2, myFunction);
    }
});

function myFunction () {
    var body = document.querySelector('body');
        body.style.overflow = 'auto';
}

text.to('.container', 1,{
    y:"-100%",
    ease: "power4.out"
});