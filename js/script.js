let copyrightArea = document.getElementsByClassName("copyright-area")[0];

copyrightArea.innerHTML = "Copyright @ " + new Date().getFullYear() + ", <span class='academate'>AcadeMate</span>. All rights reserved.";

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

const navBarFun = (toShowOrNot) => {
    let secondaryNavMenu = document.getElementById("secondary-nav-links");

    if (toShowOrNot == true) {
        secondaryNavMenu.style.visibility = "visible";
        secondaryNavMenu.style.transform = "translateX(0px)";
    } else {
        secondaryNavMenu.style.visibility = "hidden";
        secondaryNavMenu.style.transform = "translateX(24rem)";
    }
}

//theme change
let theme = localStorage.getItem("theme");
let themeChangeCheckbox = document.getElementsByClassName("checkbox")[0];

const themeFunction = () => {
    let htmlElement = document.documentElement;

    htmlElement.classList.toggle("dark");
}

if (theme == "light") {
    themeFunction();
    themeChangeCheckbox.checked = true;
}

themeChangeCheckbox.addEventListener("change", () => {

    if (themeChangeCheckbox.checked) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }

    themeFunction();

});
