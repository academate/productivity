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