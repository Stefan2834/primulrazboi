window.onscroll = function () {scroll()}
window.onresize = function () {scroll()}

function scroll() {    
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

// Menu 

var menuBtn = document.getElementById("menu");
var nav = document.querySelector("nav");
var navName = document.querySelectorAll(".nav-name");
var barTop = document.getElementById("barTop");
var barMiddle = document.getElementById("barMiddle");
var barBottom = document.getElementById("barBottom");
var main = document.getElementById("main");
var Menu = false;

menuBtn.addEventListener("click", () => {
   menu();
})


function menu () {
    if(!Menu) {
        nav.style.top = '0';
        navName.forEach(navName => {
            navName.style.opacity = '1';
            navName.style.transform = 'translate(0, 0)';
        })
        barTop.style.transform = 'rotate(45deg)';
        barBottom.style.transform = 'rotate(-45deg)';
        barMiddle.style.opacity = '0';
        barMiddle.style.transform = 'translateX(-10px)'
        Menu = true;
    } else {
        nav.style.top = '-100vh';
        navName.forEach(navName => {
            navName.style.opacity = '0';
            navName.style.transform = 'translate(0, -20px)';
        })
        barTop.style.transform = 'rotate(0)';
        barBottom.style.transform = 'rotate(0)';
        barMiddle.style.opacity = '1';
        barMiddle.style.transform = 'translateX(0px)'
        Menu = false;
    }
}


function menuClose() {
    Menu = true;
    menu();
}
if(window.innerWidth < 1000) {
    nav.addEventListener("click", function () {
        menuClose();  
    })
    window.onscroll = function () {menuClose()};
}



var firstTitle = document.querySelector("#text-first-title")
var secondTitle = document.querySelector("#text-second-title")
var thirdTitle = document.querySelector("#text-third-title")
var fourthTitle = document.querySelector("#text-fourth-title")
var actionFirst = document.querySelector("#action-first");
var actionSecond = document.querySelector("#action-second");
var actionThird = document.querySelector("#action-third");
var actionFourth = document.querySelector("#action-fourth");
var actionIndicator = document.querySelector(".action-indicator")
var main = document.getElementById("main-slide");



function firstRevealMain () {
    actionIndicator.style.transform = "translateX(0px)";
    main.style.left = '0';
    setTimeout(function () {
        firstTitle.style.opacity = '1';
        firstTitle.style.zIndex = '10';
        secondTitle.style.zIndex = '5';
        thirdTitle.style.zIndex = '5';
        fourthTitle.style.zIndex = '5';
    },300)
    secondTitle.style.opacity = '0';
    thirdTitle.style.opacity = '0';
    fourthTitle.style.opacity = '0';

}

function secondRevealMain () {
    actionIndicator.style.transform = "translateX(50px)";
    main.style.left = '-100vw';
    firstTitle.style.opacity = '0';
    setTimeout(function () {
        secondTitle.style.opacity = '1';
        firstTitle.style.zIndex = '5';
        secondTitle.style.zIndex = '10';
        thirdTitle.style.zIndex = '5';
        fourthTitle.style.zIndex = '5';
    }, 300)
    thirdTitle.style.opacity = '0';
    fourthTitle.style.opacity = '0';
}
function thirdRevealMain () {
    actionIndicator.style.transform = "translateX(100px)";
    main.style.left = '-200vw';
    firstTitle.style.opacity = '0';
    secondTitle.style.opacity = '0';
    setTimeout(function () {
        thirdTitle.style.opacity = '1';
        firstTitle.style.zIndex = '5';
        secondTitle.style.zIndex = '5';
        thirdTitle.style.zIndex = '10';
        fourthTitle.style.zIndex = '5';
    }, 300)
    fourthTitle.style.opacity = '0';
}

function fourthRevealMain () {
    actionIndicator.style.transform = "translateX(150px)";
    main.style.left = '-300vw';
    firstTitle.style.opacity = '0';
    secondTitle.style.opacity = '0';
    thirdTitle.style.opacity = '0';
    setTimeout(function () {
        fourthTitle.style.opacity = '1';
        firstTitle.style.zIndex = '5';
        secondTitle.style.zIndex = '5';
        thirdTitle.style.zIndex = '5';
        fourthTitle.style.zIndex = '10';
    }, 300)
}
firstRevealMain()

actionFirst.addEventListener("click",() =>  {
    firstRevealMain()
})
actionSecond.addEventListener("click", () =>{
    secondRevealMain()
})
actionThird.addEventListener("click", () =>{
    thirdRevealMain()
})
actionFourth.addEventListener("click", () =>{
    fourthRevealMain()
})

const bataliiLeft = document.querySelector(".batalii-left-move");
const bataliiRight = document.querySelector(".batalii-right-move");
const bataliiSlide = document.querySelector('.batalii-slide');
const verdun = document.querySelector("#batalii-verdun");
const somme = document.querySelector("#batalii-somme");
const ypres = document.querySelector("#batalii-ypres");
var x = 0;

bataliiLeft.addEventListener("click", () => {
    x += 100;
    if(x > 0) {
        x = -200
    }
    bataliiSlide.style.transform = 'translateX(' + x + 'vw)'; 
    bataliiOpacity()
})

bataliiRight.addEventListener("click", () => {
    x -= 100;
    if(x < -200) {
        x = 0;
    }
    bataliiSlide.style.transform = 'translateX(' + x + 'vw)'; 
    bataliiOpacity()
})

function bataliiOpacity () {
    if(x === 0) {
        verdun.style.opacity = '1';
        verdun.style.zIndex = '10';
        somme.style.opacity = '0';
        somme.style.zIndex = '9';
        ypres.style.opacity = '0';
        ypres.style.zIndex = '9';
    } else if (x === -100) {
        verdun.style.opacity = '0';
        verdun.style.zIndex = '9';
        somme.style.opacity = '1';
        somme.style.zIndex = '10';
        ypres.style.opacity = '0';
        ypres.style.zIndex = '9';
    } else if(x === -200) {
        verdun.style.opacity = '0';
        verdun.style.zIndex = '9';
        somme.style.opacity = '0';
        somme.style.zIndex = '9';
        ypres.style.opacity = '1';
        ypres.style.zIndex = '10';
    }
}
