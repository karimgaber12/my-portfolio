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

// validate form
function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
  }
