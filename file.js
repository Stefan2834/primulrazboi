var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var icon5 = document.getElementById("icon5");
var icon6 = document.getElementById("icon6");
var container = document.getElementById("container")

container.onscroll = function () {scroll()};
container.onresize = function () {scroll()}

function scroll() {
    let value = container.scrollTop;
    icon1.style.bottom = -500 + value * 0.4 + 'px';
    icon2.style.bottom = -900 + value * 0.2 + 'px';
    icon3.style.bottom = -1000 + value * 0.3 + 'px';
    icon4.style.bottom = -400 + value * 0.25 + 'px';
    icon5.style.bottom = -800 + value * 0.15 + 'px';
    icon6.style.bottom = -200 + value * 0.35 + 'px';
    
    
    var first = document.getElementById("first")
    var firstTop = first.getBoundingClientRect().top;
    var image = document.querySelectorAll(".image")
    var steagGer = document.querySelectorAll(".steag-ger");
    var germaniaNume = document.getElementById("germania-nume");
    var firstText = document.getElementById("first-text");
    var firstMore = document.getElementById("first-more");

    var second = document.getElementById("second")
    var secondTop = second.getBoundingClientRect().top;
    var steagRo = document.querySelectorAll(".steag-ro");
    var romaniaNume = document.getElementById("romania-nume");
    var secondText = document.getElementById("second-text");
    var secondMore = document.getElementById("second-more");

    var third = document.getElementById("third")
    var thirdTop = third.getBoundingClientRect().top;
    var steagFr = document.querySelectorAll(".steag-fr");
    var frantaNume = document.getElementById("franta-nume");
    var thirdText = document.getElementById("third-text");
    var thirdMore = document.getElementById("third-more");
    var screenHeight = screen.height / 2;
    if(outerWidth < 1000) {
        if(firstTop <= screenHeight && secondTop > screenHeight) {
            image[0].style.opacity = '0.9';
            steagGer.forEach(steagGer => {
                steagGer.style.transform = 'translateY(0px)';
                steagGer.style.opacity = '1';
            })
            steagGer[0].style.transitionDelay = '500ms';
            steagGer[1].style.transitionDelay = '600ms';
            steagGer[2].style.transitionDelay = '700ms';
            germaniaNume.style.transform = 'translateY(0px)';
            germaniaNume.style.opacity = '1';
            germaniaNume.style.transitionDelay = '400ms';
            firstText.style.transform = 'translateY(-10px)';
            firstText.style.opacity = '1';
            firstText.style.transitionDelay = '800ms'
            firstMore.style.transform = 'translateY(-10px)';
            firstMore.style.opacity = '1';
            firstMore.style.transitionDelay = '1200ms';
        } else if(secondTop <= screenHeight && thirdTop > screenHeight) {
            image[1].style.opacity = '0.9';
            steagRo.forEach(steagRo => {
                steagRo.style.transform = 'translateY(0px)';
                steagRo.style.opacity = '1';
            })
            steagRo[0].style.transitionDelay = '500ms';
            steagRo[1].style.transitionDelay = '600ms';
            steagRo[2].style.transitionDelay = '700ms';
            romaniaNume.style.transform = 'translateY(0px)';
            romaniaNume.style.opacity = '1';
            romaniaNume.style.transitionDelay = '400ms';
            secondText.style.transform = 'translateY(-10px)';
            secondText.style.opacity = '1';
            secondText.style.transitionDelay = '800ms'
            secondMore.style.transform = 'translateY(-10px)';
            secondMore.style.opacity = '1';
            secondMore.style.transitionDelay = '1200ms';
        } else if(thirdTop < screenHeight) {
            image[2].style.opacity = '0.9';
            steagFr.forEach(steagFr => {
                steagFr.style.transform = 'translateY(0px)';
                steagFr.style.opacity = '1';
            })
            steagFr[0].style.transitionDelay = '500ms';
            steagFr[1].style.transitionDelay = '600ms';
            steagFr[2].style.transitionDelay = '700ms';
            frantaNume.style.transform = 'translateY(0px)';
            frantaNume.style.opacity = '1';
            frantaNume.style.transitionDelay = '400ms';
            thirdText.style.transform = 'translateY(-10px)';
            thirdText.style.opacity = '1';
            thirdText.style.transitionDelay = '800ms'
            thirdMore.style.transform = 'translateY(-10px)';
            thirdMore.style.opacity = '1';
            thirdMore.style.transitionDelay = '1200ms';
        } 
        if(firstTop > screenHeight || secondTop <= screenHeight) {
            image[0].style.opacity = '0.4';
            steagGer.forEach(steagGer => {
                steagGer.style.transform = 'translateY(-10px)';
                steagGer.style.opacity = '0';
                steagGer.style.transitionDelay = '0ms';
            })
            germaniaNume.style.transform = 'translateY(-10px)';
            germaniaNume.style.opacity = '0';
            germaniaNume.style.transitionDelay = '0ms';
            firstText.style.transform = 'translateY(0px)';
            firstText.style.opacity = '0';
            firstText.style.transitionDelay = '0ms';
            firstMore.style.transform = 'translateY(0px)';
            firstMore.style.opacity = '0'
            firstMore.style.transitionDelay = '0ms';
        } 
        if(secondTop > screenHeight || thirdTop <= screenHeight) {
            image[1].style.opacity = '0.4';
            steagRo.forEach(steagRo => {
                steagRo.style.transform = 'translateY(-10px)';
                steagRo.style.opacity = '0';
                steagRo.style.transitionDelay = '0ms';
            })
            romaniaNume.style.transform = 'translateY(-10px)';
            romaniaNume.style.opacity = '0';
            romaniaNume.style.transitionDelay = '0ms';
            secondText.style.transform = 'translateY(0px)';
            secondText.style.opacity = '0';
            secondText.style.transitionDelay = '0ms';
            secondMore.style.transform = 'translateY(0px)';
            secondMore.style.opacity = '0'
            secondMore.style.transitionDelay = '0ms';
        }
        if(thirdTop > screenHeight) {
            image[2].style.opacity = '0.4';
            steagFr.forEach(steagFr => {
                steagFr.style.transform = 'translateY(-10px)';
                steagFr.style.opacity = '0';
                steagFr.style.transitionDelay = '0ms';
            })
            frantaNume.style.transform = 'translateY(-10px)';
            frantaNume.style.opacity = '0';
            frantaNume.style.transitionDelay = '0ms';
            thirdText.style.transform = 'translateY(0px)';
            thirdText.style.opacity = '0';
            thirdText.style.transitionDelay = '0ms';
            thirdMore.style.transform = 'translateY(0px)';
            thirdMore.style.opacity = '0'
            thirdMore.style.transitionDelay = '0ms';
        }
    }
}

