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

// make an animation when i scroll down

// animation intro
const timeLineIntro = gsap.timeline({defaults:{duration:1.5}})
timeLineIntro.fromTo('.intro-name',{scale:0,opacity:0},{scale:1,opacity:1,})
timeLineIntro.fromTo('.toggler',{x:200,},{x:0,})
timeLineIntro.fromTo('.social_media',{y:200,opacity:0},{y:0,opacity:1},'<')

//animation aboutMe
let aboutSection = document.getElementById("About-me")
const timeLineAbout = gsap.timeline({scrollTrigger:"#About-me",defaults:{duration:1.5,ease: Power1.easeInOut}})


   
 timeLineAbout.fromTo(".about-head", {scale:0},{scale:1});
 timeLineAbout.fromTo(".about-information", {scale:0},{scale:1});
 timeLineAbout.fromTo(".about-text", {x:400,opacity:0},{x:0,opacity:1},'<');

//animation Education&Skills
 const timeLineEducation = gsap.timeline({scrollTrigger:".Education-Skills-head",defaults:{duration:1.5,ease: Back.easeInOut.config(1.7)}})
 timeLineEducation.fromTo(".Education-Skills-head", {scale:0 ,rotate:-45},{scale:1,rotate:360});
 timeLineEducation.fromTo(".Education-information", {scale:0,opacity:0 ,rotate:-45},{scale:1,opacity:1,rotate:360});
 timeLineEducation.fromTo(".Skill-Cards", {y:400,opacity:0},{y:0,opacity:1},'<');
 timeLineEducation.fromTo(".line", {opacity:0 ,width:"0px"},{opacity:1 ,width:"100%"});

 //animation What i do?

 const timeLineService = gsap.timeline({scrollTrigger:".box-part",defaults:{duration:0.5, ease: Power0.easeNone}})
 timeLineService.fromTo(".box-part1", {y:600 ,opacity:0},{y:0 ,opacity:1});
 timeLineService.fromTo(".box-part2", {y:600 ,opacity:0},{y:0 ,opacity:1});
 timeLineService.fromTo(".box-part3", {y:600 ,opacity:0},{y:0 ,opacity:1});

  //animation Portfolio
  const timeLinePortfolio = gsap.timeline({scrollTrigger:"#Portfolio",defaults:{duration:4}})

  timeLinePortfolio.fromTo('#Portfolio',{opacity:0},{opacity:1})
