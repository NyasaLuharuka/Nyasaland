const hourContainer = document.querySelector("#hour");
const minContainer = document.querySelector("#min");
const secContainer = document.querySelector("#sec");

//as there is only one h1 so this won't be any problem
const header = document.querySelector("h1");

//this is the timer in seconds
let timer_set = 0;

//the hour, min and second 
let hour = 0;
let min = 0;
let sec = 0;

//this is to stor the interval to terminate it
let interval;

//if user updates these when editable then check if set >= 60 and stop them form doing that 
minContainer.addEventListener("change", () => {
    min = parseInt(minContainer.value)
    if (min >= 60) {
        hour = Math.floor(hour + min / 60);
        min = min % 60;
    }
    updateUI();
})

secContainer.addEventListener("change", () => {
    sec = parseInt(secContainer.value)
    if (sec >= 60) {
        min = Math.floor(min + sec / 60);
        sec = sec % 60;
        if (min > 60) {
            hour = Math.floor(hour + min / 60);
            min = min % 60;
        }
    }
    updateUI();
})

hourContainer.addEventListener("change", () => {
    hour = parseInt(hourContainer.value);
    updateUI();
})

function updateUI() {
    hourContainer.value = hour;
    minContainer.value = min;
    secContainer.value = sec;
}

function updateHMS() {
    sec = timer_set % 60;
    min = Math.floor(timer_set / 60);
    hour = Math.floor(min / 60);
    min = min % 60;
    updateUI();
}

function resetTime() {
    document.getElementById("start").disabled = false;
    const audio = document.getElementById("meditation-audio");
    audio.pause();
    audio.currentTime = 0;


    hour = 0
    min = 0
    sec = 0
    timer_set = 0;
    if (interval) {
        clearInterval(interval);
    }
    hourContainer.removeAttribute("readonly");
    minContainer.removeAttribute("readonly");
    secContainer.removeAttribute("readonly");
    hourContainer.value = "";
    minContainer.value = "";
    secContainer.value = "";
}

function endTicking() {
    document.getElementById("start").disabled = false;
    header.innerText = "Time's Up!"
    var audio = new Audio('sounds/bell.mp3');
    setTimeout(() => {
        header.innerText = "Welcome to"
    }, 3000)
    audio.play();
    resetTime();
}

function startTicking() {
    document.getElementById("start").disabled = true;
    if (timer_set > 0) {
        interval = setInterval(() => {
            timer_set -= 1;

            if (timer_set <= 0) {
                endTicking();
                clearInterval(interval);

            }

            updateHMS();
        }, 1000)
    } else {
        endTicking()
    }
}

function startTime() {
    hourContainer.setAttribute("readonly", "true");
    minContainer.setAttribute("readonly", "true");
    secContainer.setAttribute("readonly", "true");

    timer_set = hour * 60 * 60 + min * 60 + sec;
    startTicking();

    const selectedSound = document.getElementById("sound").value;
    const audio = document.getElementById("meditation-audio");

    if (selectedSound) {
        audio.src = `sounds/${selectedSound}.mp3`;
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}


const breathText = document.getElementById('breathtext');
const circle = document.getElementById('breathingcircle');
const dot = document.getElementById('dot');
const startBtn = document.getElementById('start1');

let boxPhases = [
    { text: "Inhale", scale: 1.5, dot: { top: "0%", left: "0%" } },
    { text: "Hold",   scale: 1.5, dot: { top: "0%", left: "100%" } },
    { text: "Exhale", scale: 1,   dot: { top: "100%", left: "100%" } },
    { text: "Hold",   scale: 1,   dot: { top: "100%", left: "0%" } }
];

let phaseIndex = 0;
let intervalId = null;

function updateBreathing() {
    const phase = boxPhases[phaseIndex];
    breathText.textContent = phase.text;
    circle.style.transform = `translate(-50%, -50%) scale(${phase.scale})`;
  
    dot.style.top = phase.dot.top;
    dot.style.left = phase.dot.left;
  
    phaseIndex = (phaseIndex + 1) % boxPhases.length;
}

startBtn.addEventListener("click", () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      startBtn.textContent = "Start";
    } else {
      updateBreathing();
      intervalId = setInterval(updateBreathing, 4000);
      startBtn.textContent = "Stop";
    }
});