let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

// Function to update the stopwatch display
function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = `${h}:${m}:${s}`;
}

// Function to start the stopwatch
function watchStart() {
    if (timer === null) {
        timer = setInterval(stopwatch, 1000);
    }
}

// Function to stop the stopwatch
function watchStop() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

// Function to reset the stopwatch
function watchReset() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}

// Event listeners for button clicks
document.getElementById("startButton").addEventListener("click", watchStart);
document.getElementById("stopButton").addEventListener("click", watchStop);
document.getElementById("resetButton").addEventListener("click", watchReset);
