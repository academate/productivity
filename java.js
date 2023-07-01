const checkPwd = () => {
    let passWord = "526264";
    let userInput = document.getElementById("notesPwd");

    let pwdPage = document.getElementsByClassName("pwdPage")[0];
    let pwdContent = document.getElementsByClassName("pwdContent")[0];

    if (userInput.value == passWord) {
        pwdPage.style.zIndex = -5;
        pwdContent.style.visibility = "hidden";
    }
}

let box_bars = Array.from(document.getElementsByClassName("box-heading"));
let box1 = document.getElementsByClassName("box1")[0];
let box2 = document.getElementsByClassName("box2")[0];

let boxOne = false;
let boxTwo = false;

box_bars[0].addEventListener("click", () => {
    if (boxOne == false) {
        box_bars[0].nextElementSibling.style.display = "block";
        box1.style.margin = 5 + "px";
        boxOne = true;
    } else {
        box_bars[0].nextElementSibling.style.display = "none";
        box1.style.margin = 30 + "% " + 0 + "px";
        boxOne = false;
    }
});

box_bars[1].addEventListener("click", () => {
    if (boxTwo == false) {
        box_bars[1].nextElementSibling.style.display = "block";
        box2.style.margin = 5 + "px";
        boxTwo = true;
    } else {
        box_bars[1].nextElementSibling.style.display = "none";
        box2.style.margin = 30 + "% " + 0 + "px";
        boxTwo = false;
    }
});