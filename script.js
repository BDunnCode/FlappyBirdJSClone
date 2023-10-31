document.addEventListener("keypress", handleStart, { once: true })
const title = document.querySelector("[data-title]")

function updateLoop(time) {
    console.log(time)
}

function handleStart() {
    title.classList.add("hide")
    window.requestAnimationFrame(updateLoop)
}

function handleLose() {

}