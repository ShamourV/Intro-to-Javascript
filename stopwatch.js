

let milliseconds = 0
let seconds = 0
let minutes = 0

let digits = document.getElementById('digits')

let startButton = document.getElementById('start-btn')

let interval;

function start () {

    startButton.disabled = true

    interval = setInterval(function () {
    milliseconds = milliseconds +10

    

    if (milliseconds >=1000) {
        seconds = seconds + 1
        milliseconds = 0
    }
if (seconds >= 60) {
   minutes = minutes + 1
    seconds = 0
}
digits.innerHTML = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0') + ':' + milliseconds
}, 10)
}

let lapList = document.getElementById('loopi')

function reset () {
    stop ()

    digits.innerHTML = "00:00:00"
    minutes = 0
    seconds= 0
    milliseconds = 0
}

function stop (){
    startButton.disabled = false
    clearInterval(interval)
}

function laps(){
    const node = document.createElement("li");
    node.innerHTML = String(minutes).padStart(2 , "0") + ":" + String(seconds).padStart(2, "0") + String(minutes)
}