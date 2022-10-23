var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var icon5 = document.getElementById("icon5");
var icon6 = document.getElementById("icon6");
var container = document.getElementById("container");

container.addEventListener("scroll", function () {
    let value = container.scrollTop;
    icon1.style.bottom = -500 + value * 0.4 + 'px';
    icon2.style.bottom = -900 + value * 0.2 + 'px';
    icon3.style.bottom = -1000 + value * 0.3 + 'px';
    icon4.style.bottom = -400 + value * 0.25 + 'px';
    icon5.style.bottom = -800 + value * 0.15 + 'px';
    icon6.style.bottom = -200 + value * 0.35 + 'px';
})

