// let hamburger = document.getElementsByClassName("hamburger")[0];
// let theBars = Array.from(document.getElementsByClassName("bar"));

// hamburger.addEventListener("click", () => {
//     theBars.forEach((bar) => {
//         bar.classList.toggle("show");
//     });
// });

let footerTxt = document.getElementsByClassName("copywrite-text")[0];
let dat = new Date();
let curYear = dat.getFullYear();

footerTxt.innerHTML = "Copyright " +  "&#169; " + curYear + ", AcadeMate. All Rights Reserved";

const settingTime = (item, the_var) => {
    if (item < 10) {
        the_var.innerHTML = "0" + item;
    } else {
        the_var.innerHTML = item;
    }
}

setInterval(() => {
    let curTime = new Date();
    let h = curTime.getHours();
    let m = curTime.getMinutes();
    let s = curTime.getSeconds();

    let hr = document.getElementById("hour");
    let min = document.getElementById("minute");
    let sec = document.getElementById("second");

    settingTime(h, hr);
    settingTime(m, min);
    settingTime(s, sec);
}, 1000);