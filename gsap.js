var first = document.querySelector("#first");
var second = document.querySelector("#second");
var third = document.querySelector("#third");
var screenHeight = screen.height / 2;

let splitWords = function (selector) {
  var elements = document.querySelectorAll(selector);

  elements.forEach(function (el) {
    el.dataset.splitText = el.textContent;
    el.innerHTML = el.textContent
      .split(/\s/)
      .map(function (word) {
        return word
          .split("-")
          .map(function (word) {
            return '<span class="word">' + word + "</span>";
          })
          .join('<span class="hyphen">-</span>');
      })
      .join('<span class="whitespace"> </span>');
  });
};

let splitLines = function (selector) {
  var elements = document.querySelectorAll(selector);

  splitWords(selector);

  elements.forEach(function (el) {
    var lines = getLines(el);

    var wrappedLines = "";
    lines.forEach(function (wordsArr) {
      wrappedLines += '<span class="line"><span class="words">';
      wordsArr.forEach(function (word) {
        wrappedLines += word.outerHTML;
      });
      wrappedLines += "</span></span>";
    });
    el.innerHTML = wrappedLines;
  });
};

let getLines = function (el) {
  var lines = [];
  var line;
  var words = el.querySelectorAll("span");
  var lastTop;
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.offsetTop != lastTop) {
      if (!word.classList.contains("whitespace")) {
        lastTop = word.offsetTop;

        line = [];
        lines.push(line);
      }
    }
    line.push(word);
  }
  return lines;
};
function firstReveal () {
  splitLines(".reveal-text1");
  
  let revealText = document.querySelectorAll(".reveal-text1");
  
  gsap.registerPlugin(ScrollTrigger);
  let revealLines = revealText.forEach((element) => {
    const lines = element.querySelectorAll(".words");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
      }
    });
    tl.set(element, { autoAlpha: 1 });
    tl.from(lines, 1, {
      yPercent: 100,
      ease: Power3.out,
      stagger: 0.05,
      delay: 0.9,
    });
  });
}
function secondReveal () {
  splitLines(".reveal-text2");
  
  let revealText = document.querySelectorAll(".reveal-text2");
  
  gsap.registerPlugin(ScrollTrigger);
  let revealLines = revealText.forEach((element) => {
    const lines = element.querySelectorAll(".words");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
      }
    });
    tl.set(element, { autoAlpha: 1 });
    tl.from(lines, 1, {
      yPercent: 100,
      ease: Power3.out,
      stagger: 0.05,
      delay: 0.9,
    });
  });
}
function thirdReveal () {
  splitLines(".reveal-text3");
  
  let revealText = document.querySelectorAll(".reveal-text3");
  
  gsap.registerPlugin(ScrollTrigger);
  let revealLines = revealText.forEach((element) => {
    const lines = element.querySelectorAll(".words");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
      }
    });
    tl.set(element, { autoAlpha: 1 });
    tl.from(lines, 1, {
      yPercent: 100,
      ease: Power3.out,
      stagger: 0.05,
      delay: 0.9,
    });
  });
}


function intro() {
  splitLines(".reveal-intro");

  let revealText = document.querySelectorAll(".reveal-intro");

  gsap.registerPlugin(ScrollTrigger);
  let revealLines = revealText.forEach((element) => {
    const lines = element.querySelectorAll(".words");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
      }
    });
    tl.set(element, { autoAlpha: 1 });
    tl.from(lines, 1, {
      yPercent: 100,
      ease: Power3.out,
      stagger: 0.08,
      delay: 0.4,
    });
  });
} 
var introText = document.querySelector(".reveal-intro");
window.addEventListener("resize", function() {
  if(window.innerWidth > 1000) {
    intro()
  } else {
    introText.style.visibility = 'visible'
  }
  widthTest();
  slide();
});
window.addEventListener('load', function () {
  if(window.innerWidth > 1000 ) {
    intro();
  } else {
    introText.style.visibility = 'visible';
  }
  widthTest();
})

function widthTest () {
  if (innerWidth >= 1000) {
    first.addEventListener("mouseenter", () => firstReveal());
    second.addEventListener("mouseenter", () => secondReveal());
    third.addEventListener("mouseenter", () => thirdReveal());
  }
}
function slide () {
  const moveUp = gsap.utils.toArray('.moveUp');
  
  moveUp.forEach((moveUp, i) => {
    const animemoveUp = gsap.fromTo(moveUp, {autoAlpha: 0, y: 100}, {duration: 1, autoAlpha: 1, y: 0});
    ScrollTrigger.create({
      trigger: moveUp,
      animation: animemoveUp,
      toggleActions: 'play none none none',
      once: false,
    });
  });

  if (window.innerWidth > 1000) {

    const moveLeft = gsap.utils.toArray('.moveLeft');
      
    moveLeft.forEach((moveLeft, i) => {
      const animmoveLeft = gsap.fromTo(moveLeft, {autoAlpha: 0, x: -100, y:0}, {duration: 1, autoAlpha: 1, x: 0, y:0});
      ScrollTrigger.create({
        trigger: moveLeft,
        animation: animmoveLeft,
        toggleActions: 'play none none none',
        once: false,
      });
    });
  
    const moveRight = gsap.utils.toArray('.moveRight');
      
    moveRight.forEach((moveRight, i) => {
      const animmoveRight = gsap.fromTo(moveRight, {autoAlpha: 0, x:100 , y:0}, {duration: 1, autoAlpha: 1, x: 0, y:0});
      ScrollTrigger.create({
        trigger: moveRight,
        animation: animmoveRight,
        toggleActions: 'play none none none',
        once: false,
      });
    });
  } else {
    const moveLeft = gsap.utils.toArray('.moveLeft');
      
    moveLeft.forEach((moveLeft, i) => {
      const animmoveLeft = gsap.fromTo(moveLeft, {autoAlpha: 0, y: 100, x:0}, {duration: 1, autoAlpha: 1, y: 0, x:0});
      ScrollTrigger.create({
        trigger: moveLeft,
        animation: animmoveLeft,
        toggleActions: 'play none none none',
        once: false,
      });
    });
  
    const moveRight = gsap.utils.toArray('.moveRight');
      
    moveRight.forEach((moveRight, i) => {
      const animmoveRight = gsap.fromTo(moveRight, {autoAlpha: 0, y: 100 ,x :0}, {duration: 1, autoAlpha: 1, y: 0, x:0});
      ScrollTrigger.create({
        trigger: moveRight,
        animation: animmoveRight,
        toggleActions: 'play none none none',
        once: false,
      });
    }); 
  }
}

setTimeout(slide(),2000);


var load = document.getElementById("loading");
window.addEventListener("load", function () {
    setTimeout(function() {
      load.style.opacity = '0';
      load.style.visibility = 'hidden';
      body.style.overflowY = 'scroll';
    }, 2000)
    anime({
      targets: '#svgGroup',
      strokeDashoffset: [1000, 0],
      easing: 'easeInOutSine',
      duration: 5000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false,
  },)
})



