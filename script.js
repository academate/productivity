let footerTxt = document.getElementsByClassName("copywrite-text")[0];
let dat = new Date();
let curYear = dat.getFullYear();

footerTxt.innerHTML = "Copyright " +  "&#169; " + curYear + ", AcadeMate. All Rights Reserved";

let btnText = Array.from(document.getElementsByClassName("multipurpose-btn"));

btnText.forEach(btn => {
    btn.innerHTML = "Download";
});
