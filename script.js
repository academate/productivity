let footerTxt = document.getElementsByClassName("copywrite-text")[0];
let dat = new Date();
let curYear = dat.getFullYear();

footerTxt.innerHTML = "Copyright " +  "&#169; " + curYear + ", AcadeMate. All Rights Reserved";

footerTxt.innerHTML += "<br><br>Email: academate@gmail.com"

let btnText = Array.from(document.getElementsByClassName("multipurpose-btn"));

btnText.forEach(btn => {
    btn.innerHTML = "Download";
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
