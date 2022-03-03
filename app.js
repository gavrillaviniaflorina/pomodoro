let hour2 = document.querySelector(".hour");
let min2 = document.querySelector(".minute");
let sec2 = document.querySelector(".seconds");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let buttons = document.querySelector(".buttons");
let timer = document.querySelector(".timer");
let stopClicked = 0;
let hour1 = 0;
let min1 = 0;
let sec1 = 5;

function set() {
    hour2.innerHTML = `0${hour1}`;
    min2.innerHTML = `0${min1}`;
    sec2.innerHTML = `0${sec1}`;
}

set();

hour2.addEventListener("click", (e) => {
    let input1 = document.createElement("INPUT");
    timer.replaceChild(input1, hour2);
    input1.classList = "hour";
    let hour = document.querySelector(".hour");

    hour.addEventListener("input", (e) => {
        if (hour.value < 10) {
            hour1 = `0${hour.value}`;
        } else {

            hour1 = `${hour.value}`;
        }


    })

})

min2.addEventListener("click", (e) => {
    let input2 = document.createElement("INPUT");
    timer.replaceChild(input2, min2);
    input2.classList = "min";

    let min = document.querySelector(".min");
    min.addEventListener("input", (e) => {

        if (min.value < 10) {
            min1 = `0${min.value}`;
        } else {

            min1 = `${min.value}`;
        }

    })
})

sec2.addEventListener("click", (e) => {
    let input3 = document.createElement("INPUT");
    timer.replaceChild(input3, sec2);
    input3.classList = "sec";

    let sec = document.querySelector(".sec");
    sec.addEventListener("input", (e) => {

        if (sec.value < 10) {
            sec1 = `0${sec.value}`;
        } else {

            sec1 = `${sec.value}`;
        }
    })
})





start.addEventListener("click", (e) => {

    startTimer();
    let hour = document.createElement("SPAN");
    hour.classList = "hour";
    hour.innerHTML = `${hour1}`;
    timer.replaceChild(hour, timer.firstElementChild);




    let min = document.createElement("SPAN");
    min.classList = "min";
    min.innerHTML = `${min1}`;
    timer.replaceChild(min, timer.firstElementChild.nextElementSibling);


    let sec = document.createElement("SPAN");
    sec.classList = "sec";
    sec.innerHTML = `${sec1}`;
    timer.replaceChild(sec, timer.firstElementChild.nextElementSibling.nextElementSibling);



});


stop.addEventListener("click", (e) => {
    stopClicked = 1;
    clearTimeout(time);
})

reset.addEventListener("click", resetTimer);



function resetTimer() {

    let hour1 = 0;
    let min1 = 0;
    let sec1 = 0;
    hour2.innerHTML = `0${hour1}`;
    min2.innerHTML = `0${min1}`;
    sec2.innerHTML = `0${sec1}`;
    clearTimeout(time);
}

function forTimer() {

    let hour = document.querySelector(".hour");
    let min = document.querySelector(".min");
    let sec = document.querySelector(".sec");
    if (hour1 == 0 && min1 == 0 && sec1 == 1) {
        hour.innerHTML = `00`;
        min.innerHTML = `00`;
        sec.innerHTML = `00`;
    } else {
        sec1--;
        if (sec1 == 0) {
            sec1 = 59;
            min1--;
        }
        if (min1 == 1) {
            min1 = 59;
            hour1--;
        }



        if (hour1 < 10 && hour1[0] != '0') {
            hour.innerHTML = `0${hour1}`;
        } else {
            hour.innerHTML = `${hour1}`;
        }

        if (min1 < 10 && min1[0] != '0') {
            min.innerHTML = `0${min1}`;
        } else {
            min.innerHTML = `${min1}`;
        }

        if (sec1 < 10) {
            sec.innerHTML = `0${sec1}`;
        } else {
            sec.innerHTML = `${sec1}`;
        }
        startTimer();
    }

}

function startTimer() {

    time = setTimeout(forTimer, 1000);
}