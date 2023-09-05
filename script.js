let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;
let alarmTime;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        interval = setInterval(updateTime, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    document.getElementById("startStop").textContent = "Start";
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    checkAlarm();
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById("display").textContent = formattedTime;
}

function setAlarm() {
    const alarmInput = document.getElementById("alarmTime").value;
    if (alarmInput) {
        alarmTime = alarmInput;
        alert("Alarm set for " + alarmTime);
    }
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    document.getElementById("clockDisplay").textContent = formattedTime;
}

// Call updateClock function every second to update the clock display
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();