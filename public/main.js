const startBtn = document.getElementById("startbtn");
const pauseBtn = document.getElementById("pausebtn");
const clearBtn = document.getElementById("clearbtn");
const hours = document.getElementById("hrs");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const days = document.getElementById("days");

let daysValue = 35;
let hoursValue = 0;
let minutesValue = 0;
let secondsValue = 0;

let timer = null;
// let isPaused = false;

function updateDisplay() {
    days.textContent = daysValue.toString().padStart(2, "0");
    hours.textContent = hoursValue.toString().padStart(2, "0");
    minutes.textContent = minutesValue.toString().padStart(2, "0");
    seconds.textContent = secondsValue.toString().padStart(2, "0");
}

function startCountDown() {
    if (timer === null) {
        timer = setInterval(function () {
            if (secondsValue > 0) {
                secondsValue--;

            } else if (minutesValue > 0) {
                minutesValue--;
                secondsValue = 59;

            } else if (hoursValue > 0) {
                hoursValue--;
                minutesValue = 59;
                secondsValue = 59;

            } else if (daysValue > 0){
                daysValue--
                hoursValue = 23;
                minutesValue = 59;
                secondsValue = 59;
                
            } else {
                clearInterval(timer);
                timer = null;
                alert("Happy New Year!");
            }

            updateDisplay();
        }, 1000);
    }
}

// function pauseCountdown() {
//     clearInterval(timer);
//     timer = null; 
//     isPaused = true;
// }

// function resetCountdown() {
//     clearInterval(timer);
//     timer = null;
//     hoursValue = 1;
//     minutesValue = 1;
//     secondsValue = 5;
    
//     updateDisplay();
//     isPaused = false;
// }


startBtn.addEventListener("click", startCountDown);
// pauseBtn.addEventListener("click", pauseCountdown);
// clearBtn.addEventListener("click", resetCountdown);


updateDisplay();

