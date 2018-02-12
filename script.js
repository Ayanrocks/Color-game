//alert("connected");
var colors = generate(6);

var square = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var nos = 6;                                     //number of squares

resetbutton.addEventListener("click", function () {
    colors = generate(nos);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    resetbutton.textContent = "New Colors";
    message.textContent = "";

})

easy.addEventListener("click", function () {
    hard.classList.remove("selected");
    easy.classList.add("selected");
    nos = 3;
    colors = generate(nos);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.background = colors[i];

        } else {
            square[i].style.display = "none";
        }

    }
    h1.style.background = "steelblue";
    resetbutton.textContent = "New Colors";

})

hard.addEventListener("click", function () {
        easy.classList.remove("selected");
        hard.classList.add("selected");
        hard.classList.add("selected");
        nos = 6;
        colors = generate(nos);
        pickedcolor = pickcolor();
        colordisplay.textContent = pickedcolor;
        for (var i = 0; i < square.length; i++) {

        square[i].style.background = colors[i];



        square[i].style.display = "block";
    }


    h1.style.background = "steelblue";
    resetbutton.textContent = "New Colors";

})



colordisplay.textContent = pickedcolor;

for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];

    square[i].addEventListener("click", function () {
        //        alert("clicked a square");

        var clickedcolor = this.style.background;
        if (clickedcolor === pickedcolor) {
            changecolor(clickedcolor);
            message.textContent = "Correct";
            resetbutton.textContent = "Play Again?";
            h1.style.background = clickedcolor;
            //        alert("correct");
        } else {
            //           alert("wrong");
            this.style.background = "#232323";
            message.textContent = "Try Again";
        }
    })
}


function changecolor(color) { //changing colors
    for (var i = 0; i < colors.length; i++) {
        square[i].style.background = color;
    }
}

function pickcolor() {                                          //picking colors
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generate(num) { //generating colors
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(randomcolors());

    }


    return arr;
}

function randomcolors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);        //assigns a value b/w 1-255 to r g b variables      
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}
