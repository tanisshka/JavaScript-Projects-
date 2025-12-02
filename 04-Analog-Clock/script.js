const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hRotation = 30 * h + m / 2;
    let mRotation = 6 * m;
    let sRotation = 6 * s;

    hour.style.transform = `translateX(-50%) rotate(${hRotation}deg)`;
    minute.style.transform = `translateX(-50%) rotate(${mRotation}deg)`;
    second.style.transform = `translateX(-50%) rotate(${sRotation}deg)`;
}, 1000);
