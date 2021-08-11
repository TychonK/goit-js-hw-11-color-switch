const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector("[data-action='start']"),
    stop: document.querySelector("[data-action='stop']"),
    body: document.querySelector("body")
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let isActive = false;
let interval;

function onStartButton() {
    if (isActive) {
        return;
    }

    isActive = true;
    interval = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    }, 1000);
}

function onStopButton() {
    isActive = false;
    clearInterval(interval)
}

refs.start.addEventListener("click", onStartButton)

refs.stop.addEventListener("click", onStopButton)




