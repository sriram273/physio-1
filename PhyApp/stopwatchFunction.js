var timer;
var isRunning = false;
var milliseconds = 0, seconds = 0, minutes = 0, hours = 0;

function startStopTimer() {
    if (isRunning) {
        // Stop the timer
        clearInterval(timer);
        document.getElementById('startStopBtn').innerText = 'Start';
    } else {
        // Start the timer
        timer = setInterval(updateTimer, 10); // Update every 10 milliseconds
        document.getElementById('startStopBtn').innerText = 'Stop';
    }
    isRunning = !isRunning;
}

function restartTimer() {
    // Stop the timer if running
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('startStopBtn').innerText = 'Start';
    }

    // Reset timer variables
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    // Update the timer display
    document.getElementById('timer').innerText = '00:00:00:000';
}

function updateTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    // Format the time as HH:MM:SS:SSS
    var formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    
    // Update the timer display
    document.getElementById('timer').innerText = formattedTime;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

function padMilliseconds(num) {
    return num < 10 ? '00' + num : (num < 100 ? '0' + num : num);
}
