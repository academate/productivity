let footerTxt = document.getElementsByClassName("copywrite-text")[0];
let dat = new Date();
let curYear = dat.getFullYear();

footerTxt.innerHTML = "Copyright " +  "&#169; " + curYear + ", AcadeMate. All Rights Reserved";

footerTxt.innerHTML += "<br><br>Email: academate@gmail.com"

let btnText = Array.from(document.getElementsByClassName("multipurpose-btn"));

btnText.forEach(btn => {
    btn.innerHTML = "Download";
});
