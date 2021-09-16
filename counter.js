let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")

let counter = 0

function sum() {
  counter++
  h1.textContent = counter
}
function subtract() {
  counter--
  h1.textContent = counter
}

function save() {
  h2.textContent += counter + " | "
  counter = 0
  h1.textContent = counter
}

function erase() {
  counter = 0
  h2.textContent = ""
}