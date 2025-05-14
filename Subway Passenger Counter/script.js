let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}
let lapsCompleted = 0;
function conter() {
    lapsCompleted = lapsCompleted + 1;
    console.log(lapsCompleted);
}
conter();
conter();
conter();
conter();