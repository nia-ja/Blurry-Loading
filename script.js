const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

// run blurring function every 30ms
let int = setInterval(blurring, 30);

function blurring() {
    load++;

    // stop incrementing on 100
    if (load > 99) {
        clearInterval(int)
    }

    // Change % in DOM
    loadText.innerText = `${load}%`;
    // number = load, inMin(our min value of load is 0), inMax(our max value of load is 100), we need to scale it to opacity from 1 to 0
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}