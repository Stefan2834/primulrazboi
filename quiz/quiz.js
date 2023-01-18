let value = document.querySelectorAll(".value");
let submit = document.getElementById("submit");
let score = 0;

submit.addEventListener("submit", function (e) {
    e.preventDefault()
    value.forEach(value => {
        if(value.checked) {
            if(value.value === 'true') {
                score += 1;
            } else {
                value.style.color = 'black';
            }
            value.checked = false;
        }
    })
    document.body.innerHTML = `<div class="score"><div>Punctajul tău: ${score}<div><a href='/primulrazboi'>Inapoi</a></div>`
    score = 0;
})

