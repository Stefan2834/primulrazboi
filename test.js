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
window.addEventListener("resize", function() {
  intro();
  widthTest();
});
window.addEventListener('load', function () {
  intro();
  widthTest();
})

function widthTest (e) {
  if (outerWidth >= 1000) {
    first.addEventListener("mouseenter", () => firstReveal());
    second.addEventListener("mouseenter", () => secondReveal());
    third.addEventListener("mouseenter", () => thirdReveal());
  } else if(outerWidth < 1000) {
    window.addEventListener("scroll", function () {
      let firstTop = first.getBoundingClientRect().top
      let secondTop = second.getBoundingClientRect().top
      let thirdTop = third.getBoundingClientRect().top
      if (firstTop <= screenHeight && secondTop > screenHeight) {
        firstReveal();
      } else if(secondTop <= screenHeight && thirdTop > screenHeight) {
        secondReveal();
      } else if(thirdTop <= screenHeight) {
        thirdReveal();
      }
    })
  }
}
