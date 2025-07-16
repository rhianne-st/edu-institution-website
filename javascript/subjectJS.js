const Grade7 = document.querySelector("#Grade7");
const Grade8 = document.querySelector("#Grade8");
const Grade9 = document.querySelector("#Grade9");
const Grade10 = document.querySelector("#Grade10");
const Grade11 = document.querySelector("#Grade11");
const Grade12 = document.querySelector("#Grade12");

document.getElementById('subG7').style.display ="block";

Grade7.addEventListener("click", () => {
    document.getElementById('subG7').style.display ="block"
    document.getElementById('subG8').style.display ="none"
    document.getElementById('subG9').style.display ="none"
    document.getElementById('subG10').style.display ="none"
    document.getElementById('subG11').style.display ="none"
    document.getElementById('subG12').style.display ="none"
                   

});

Grade8.addEventListener("click", () => {
    document.getElementById('subG7').style.display ="none"
    document.getElementById('subG8').style.display ="block"
    document.getElementById('subG9').style.display ="none"
    document.getElementById('subG10').style.display ="none"
    document.getElementById('subG11').style.display ="none"
    document.getElementById('subG12').style.display ="none"
});

Grade9.addEventListener("click", () => {
    document.getElementById('subG7').style.display ="none"
    document.getElementById('subG8').style.display ="none"
    document.getElementById('subG9').style.display ="block"
    document.getElementById('subG10').style.display ="none"
    document.getElementById('subG11').style.display ="none"
    document.getElementById('subG12').style.display ="none"
});

Grade10.addEventListener("click", () => {
    document.getElementById('subG7').style.display ="none"
    document.getElementById('subG8').style.display ="none"
    document.getElementById('subG9').style.display ="none"
    document.getElementById('subG10').style.display ="block"
    document.getElementById('subG11').style.display ="none"
    document.getElementById('subG12').style.display ="none"
});

Grade11.addEventListener("click", () => {
    document.getElementById('subG7').style.display ="none"
    document.getElementById('subG8').style.display ="none"
    document.getElementById('subG9').style.display ="none"
    document.getElementById('subG10').style.display ="none"
    document.getElementById('subG11').style.display ="block"
    document.getElementById('subG12').style.display ="none"
});

Grade12.addEventListener("click", () => {
    document.getElementById('subG7').style.display ="none"
    document.getElementById('subG8').style.display ="none"
    document.getElementById('subG9').style.display ="none"
    document.getElementById('subG10').style.display ="none"
    document.getElementById('subG11').style.display ="none"
    document.getElementById('subG12').style.display ="block"
});

const g7MathButton = document.querySelector("#g7MathButton");
const g7Math = document.querySelector("#g7Math");
const g7ScienceButton = document.querySelector("#g7ScienceButton");
const g7GS = document.querySelector("#g7GS");
const g7HistButton = document.querySelector("#g7HistButton");
const g7History = document.querySelector("#g7History");
const g7PEButton = document.querySelector("#g7PEButton");
const g7PE = document.querySelector("#g7PE");
const g7BusinessButton = document.querySelector("#g7BusinessButton");
const g7Business = document.querySelector("#g7Business");
const g7ArtsButton = document.querySelector("#g7ArtsButton");
const g7Arts = document.querySelector("#g7Arts");
const g7ITButton = document.querySelector("#g7ITButton");
const g7IT = document.querySelector("#g7IT");


const g8MathButton = document.querySelector("#g8MathButton");
const g8Math = document.querySelector("#g8Math");
const g8ScienceButton = document.querySelector("#g8ScienceButton");
const g8GS = document.querySelector("#g8GS");
const g8HistButton = document.querySelector("#g8HistButton");
const g8History = document.querySelector("#g8History");
const g8PEButton = document.querySelector("#g8PEButton");
const g8PE = document.querySelector("#g8PE");
const g8BusinessButton = document.querySelector("#g8BusinessButton");
const g8Business = document.querySelector("#g8Business");
const g8ArtsButton = document.querySelector("#g8ArtsButton");
const g8Arts = document.querySelector("#g8Arts");
const g8ITButton = document.querySelector("#g8ITButton");
const g8IT = document.querySelector("#g8IT");

const g9MathButton = document.querySelector("#g9MathButton");
const g9Math = document.querySelector("#g9Math");
const g9ScienceButton = document.querySelector("#g9ScienceButton");
const g9GS = document.querySelector("#g9GS");
const g9HistButton = document.querySelector("#g9HistButton");
const g9History = document.querySelector("#g9History");
const g9PEButton = document.querySelector("#g9PEButton");
const g9PE = document.querySelector("#g9PE");
const g9BusinessButton = document.querySelector("#g9BusinessButton");
const g9Business = document.querySelector("#g9Business");
const g9ArtsButton = document.querySelector("#g9ArtsButton");
const g9Arts = document.querySelector("#g9Arts");
const g9ITButton = document.querySelector("#g9ITButton");
const g9IT = document.querySelector("#g9IT");

const g10MathButton = document.querySelector("#g10MathButton");
const g10Math = document.querySelector("#g10Math");
const g10ScienceButton = document.querySelector("#g10ScienceButton");
const g10GS = document.querySelector("#g10GS");
const g10HistButton = document.querySelector("#g10HistButton");
const g10History = document.querySelector("#g10History");
const g10PEButton = document.querySelector("#g10PEButton");
const g10PE = document.querySelector("#g10PE");
const g10BusinessButton = document.querySelector("#g10BusinessButton");
const g10Business = document.querySelector("#g10Business");
const g10ArtsButton = document.querySelector("#g10ArtsButton");
const g10Arts = document.querySelector("#g10Arts");
const g10ITButton = document.querySelector("#g10ITButton");
const g10IT = document.querySelector("#g10IT");

const g11MathButton = document.querySelector("#g11MathButton");
const g11Math = document.querySelector("#g11Math");
const g11ScienceButton = document.querySelector("#g11ScienceButton");
const g11GS = document.querySelector("#g11GS");
const g11HistButton = document.querySelector("#g11HistButton");
const g11History = document.querySelector("#g11History");
const g11PEButton = document.querySelector("#g11PEButton");
const g11PE = document.querySelector("#g11PE");
const g11BusinessButton = document.querySelector("#g11BusinessButton");
const g11Business = document.querySelector("#g11Business");
const g11ArtsButton = document.querySelector("#g11ArtsButton");
const g11Arts = document.querySelector("#g11Arts");
const g11ITButton = document.querySelector("#g11ITButton");
const g11IT = document.querySelector("#g11IT");

const g12MathButton = document.querySelector("#g12MathButton");
const g12Math = document.querySelector("#g12Math");
const g12ScienceButton = document.querySelector("#g12ScienceButton");
const g12GS = document.querySelector("#g12GS");
const g12HistButton = document.querySelector("#g12HistButton");
const g12History = document.querySelector("#g12History");
const g12PEButton = document.querySelector("#g12PEButton");
const g12PE = document.querySelector("#g12PE");
const g12BusinessButton = document.querySelector("#g12BusinessButton");
const g12Business = document.querySelector("#g12Business");
const g12ArtsButton = document.querySelector("#g12ArtsButton");
const g12Arts = document.querySelector("#g12Arts");
const g12ITButton = document.querySelector("#g12ITButton");
const g12IT = document.querySelector("#g12IT");


g7MathButton.addEventListener("click", () => {
    g7Math.classList.toggle("active")
});
g7ScienceButton.addEventListener("click", () => {
    g7GS.classList.toggle("active")
});
g7HistButton.addEventListener("click", () => {
    g7History.classList.toggle("active")
});
g7PEButton.addEventListener("click", () => {
    g7PE.classList.toggle("active")
});
g7BusinessButton.addEventListener("click", () => {
    g7Business.classList.toggle("active")
});
g7ArtsButton.addEventListener("click", () => {
    g7Arts.classList.toggle("active")
});
g7ITButton.addEventListener("click", () => {
    g7IT.classList.toggle("active")
});


g8MathButton.addEventListener("click", () => {
    g8Math.classList.toggle("active")
});
g8ScienceButton.addEventListener("click", () => {
    g8GS.classList.toggle("active")
});
g8HistButton.addEventListener("click", () => {
    g8History.classList.toggle("active")
});
g8PEButton.addEventListener("click", () => {
    g8PE.classList.toggle("active")
});
g8BusinessButton.addEventListener("click", () => {
    g8Business.classList.toggle("active")
});
g8ArtsButton.addEventListener("click", () => {
    g8Arts.classList.toggle("active")
});
g8ITButton.addEventListener("click", () => {
    g8IT.classList.toggle("active")
});


g9MathButton.addEventListener("click", () => {
    g9Math.classList.toggle("active")
});
g9ScienceButton.addEventListener("click", () => {
    g9GS.classList.toggle("active")
});
g9HistButton.addEventListener("click", () => {
    g9History.classList.toggle("active")
});
g9PEButton.addEventListener("click", () => {
    g9PE.classList.toggle("active")
});
g9BusinessButton.addEventListener("click", () => {
    g9Business.classList.toggle("active")
});
g9ArtsButton.addEventListener("click", () => {
    g9Arts.classList.toggle("active")
});
g9ITButton.addEventListener("click", () => {
    g9IT.classList.toggle("active")
});


g10MathButton.addEventListener("click", () => {
    g10Math.classList.toggle("active")
});
g10ScienceButton.addEventListener("click", () => {
    g10GS.classList.toggle("active")
});
g10HistButton.addEventListener("click", () => {
    g10History.classList.toggle("active")
});
g10PEButton.addEventListener("click", () => {
    g10PE.classList.toggle("active")
});
g10BusinessButton.addEventListener("click", () => {
    g10Business.classList.toggle("active")
});
g10ArtsButton.addEventListener("click", () => {
    g10Arts.classList.toggle("active")
});
g10ITButton.addEventListener("click", () => {
    g10IT.classList.toggle("active")
});

g11MathButton.addEventListener("click", () => {
    g11Math.classList.toggle("active")
});
g11ScienceButton.addEventListener("click", () => {
    g11GS.classList.toggle("active")
});
g11HistButton.addEventListener("click", () => {
    g11History.classList.toggle("active")
});
g11PEButton.addEventListener("click", () => {
    g11PE.classList.toggle("active")
});
g11BusinessButton.addEventListener("click", () => {
    g11Business.classList.toggle("active")
});
g11ArtsButton.addEventListener("click", () => {
    g11Arts.classList.toggle("active")
});
g11ITButton.addEventListener("click", () => {
    g11IT.classList.toggle("active")
});

g12MathButton.addEventListener("click", () => {
    g12Math.classList.toggle("active")
});
g12ScienceButton.addEventListener("click", () => {
    g12GS.classList.toggle("active")
});
g12HistButton.addEventListener("click", () => {
    g12History.classList.toggle("active")
});
g12PEButton.addEventListener("click", () => {
    g12PE.classList.toggle("active")
});
g12BusinessButton.addEventListener("click", () => {
    g12Business.classList.toggle("active")
});
g12ArtsButton.addEventListener("click", () => {
    g12Arts.classList.toggle("active")
});
g12ITButton.addEventListener("click", () => {
    g12IT.classList.toggle("active")
});

