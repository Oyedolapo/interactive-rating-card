const containerEl = document.querySelector(".container")
const flipContainer = document.querySelector(".flip-container")
const submitEl = document.querySelector(".submit")
const flipBtn = document.querySelector(".flip-btn")
const ratingEl = document.querySelector("#rating")
const btnEls = document.querySelectorAll(".btn")

submitEl.addEventListener("click", function() {
    flipContainer.classList.remove("hidden")
    containerEl.style.display = "none"
})

flipBtn.addEventListener("click", function() {
    flipContainer.classList.add("hidden")
    containerEl.style.display = "block"
})

btnEls.forEach((btnEl) => {
    btnEl.addEventListener("click", function() {
        ratingEl.innerHTML = btnEl.innerHTML
    })

})

