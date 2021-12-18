// create a writer effect for intro
const data = ['Frontend Developer','Web Designer']
let placeText = document.getElementById("text");

let count = 0
let index = 0
let currentText = ''
let letter = ''

window.onload = function writer() {
    if (count === data.length) {
        count = 0
    }
    currentText = data[count];
    letter = currentText.slice(0, ++index)

    placeText.textContent = letter
    if (letter.length === currentText.length) {
        count++
        index = 0
    }
    
    setTimeout(writer,300)
}

//create toggle effect
let toggler = document.querySelector(".toggler")
let toggle1 = document.querySelector(".toogle1")
let toggle2 = document.querySelector(".toogle2")

let nav = document.querySelector(".navbar")
toggler.addEventListener('click',()=>{

    toggle1.classList.toggle("active1");
    toggle2.classList.toggle("active");
    nav.classList.toggle("active")
})

// close nav when i clicked to section

function togglemenu() {

    nav.classList.remove('active')
    toggle1.classList.remove("active1");
    toggle2.classList.remove("active");

}

