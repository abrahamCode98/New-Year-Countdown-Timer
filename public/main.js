// Get references to the buttons and display elements for the countdown from the ejs file
const startBtn = document.getElementById("startbtn");
const pauseBtn = document.getElementById("pausebtn");
const clearBtn = document.getElementById("clearbtn");
const hours = document.getElementById("hrs");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const days = document.getElementById("days");

//Initialize the time values for the countdown
let daysValue = 35; // Total days to countdown 
let hoursValue = 0; // intial hours
let minutesValue = 0; // intial minutes
let secondsValue = 0; // intial seconds

// Initialize the timer variable
let timer = null; // variable to hold the interval Id for the countdown timer
// let isPaused = false;

// function to update the countdown timer
function updateDisplay() {
    // Display days, hours, minutes, seconds in two digit format
    days.textContent = daysValue.toString().padStart(2, "0");
    hours.textContent = hoursValue.toString().padStart(2, "0");
    minutes.textContent = minutesValue.toString().padStart(2, "0");
    seconds.textContent = secondsValue.toString().padStart(2, "0");
}

// function to start the timer
function startCountDown() {
    if (timer === null) {
        timer = setInterval(function () {
            //if the value of seconds is greater than 0, decrement seconds
            if (secondsValue > 0) {
                secondsValue--;

            } else if (minutesValue > 0) {
                // If seconds reach 0 and there are remaining minutes, decrement minutes and reset seconds to 59
                minutesValue--;
                secondsValue = 59;

            } else if (hoursValue > 0) {
                // If minutes reach 0 and there are remaining hours, decrement hours and reset minutes and seconds
                hoursValue--;
                minutesValue = 59;
                secondsValue = 59;

            } else if (daysValue > 0){
                // If hours reach 0 and there are remaining days, decrement days and reset hours, minutes, and seconds
                daysValue--
                hoursValue = 23;
                minutesValue = 59;
                secondsValue = 59;
                
            } else {
                // If all days, hours, minutes, and seconds reach 0, stop the countdown and display Happy New Year in the alert window. 
                clearInterval(timer);
                timer = null;
                alert("Happy New Year!");
            }

            // Update the countdown display after each change
            updateDisplay();
        }, 1000); // execute every second
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

// Event listener for the start button to intiate the countdown 
startBtn.addEventListener("click", startCountDown);

// pauseBtn.addEventListener("click", pauseCountdown);
// clearBtn.addEventListener("click", resetCountdown);


//update the display immadiately the page loads
updateDisplay();

