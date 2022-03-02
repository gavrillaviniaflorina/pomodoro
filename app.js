let timeH = document.querySelector("h1");
let hour = document.querySelector(".hour");
let min = document.querySelector(".minute");
let start = document.querySelector(".start");
let timeMinute = 70;
let initial = timeMinute;
let stopClicked = 0;


start.addEventListener("click", (e) => {

    setInterval(timer, 1000);
    CreateButtons();
})


displayTime(timeMinute);



function timer() {
    if (stopClicked == 0) {


        timeMinute--;
        displayTime(timeMinute);

        if (timeMinute <= 0 || timeMinute < 1) {
            clearInterval(countdown);
        }
    }

}

function displayTime(minutes) {
    let hourValue = Math.floor(minutes / 60);
    let minValue = Math.floor(minutes % 60);

    if (hourValue < 10) {
        hour.innerHTML = `0${hourValue}`;
    } else {
        hour.innerHTML = `${hourValue}`;
    }

    if (minValue < 10) {
        min.innerHTML = `0${minValue}`;
    } else {
        min.innerHTML = `${minValue}`;
    }


}

let CreateButtons = () => {

    let stop = document.createElement("BUTTON");
    stop.classList = "but";
    stop.classList.add("stop");
    stop.innerHTML = `Stop`;

    let reset = document.createElement("BUTTON");
    reset.classList = "but";
    reset.classList.add("reset");
    reset.innerHTML = `reset`;

    let buttons = document.querySelector(".buttons");
    buttons.removeChild(buttons.firstElementChild);

    buttons.appendChild(stop)
    buttons.appendChild(reset);

    stop.addEventListener("click", (e) => {
        buttons.insertBefore(start, stop);
        buttons.removeChild(stop);
        stopClicked = 1;
    })


    reset.addEventListener("click", (e) => {

    })

}