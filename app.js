let timer = document.querySelector(".timer");
let start = document.querySelector(".start");
let buttons = document.querySelector(".buttons");
let time = new Date();

start.addEventListener("click", handleStart);

let handleStart = (e) => {

    let stop = document.createElement("BUTTON");
    stop.classList = "stop";
    stop.classList.add("but");
    stop.innerHTML = `Stop`;
    let reset = document.createElement("BUTTON");
    reset.classList = "reset";
    reset.innerHTML = `reset`;
    reset.classList.add("but");
    buttons.removeChild(start);
    buttons.appendChild(stop);
    buttons.appendChild(reset);

}


function getTime() {


    const hh = format(time.getHours());
    const mm = format(time.getMinutes());
    const ss = format(time.getSeconds());

    return `${hh}:${mm}:${ss}`;

}

function format(number) {

    if (number < 10) {
        return "0" + number;
    } else {
        return number;
    }
}



setInterval()