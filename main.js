// PoP Up portfolio section
const PopUpData = [
    {
        id : 1,
        ProjectImage : "assets/images/Portfolio/Pimg1.jpg",
        ProjectName : "Project Name",
        Category : "Graphic design",
        Client : "Company",
        ProjectDate : "03 March 2020",
        ProjectURLName : "www.example.com",
        ProjectURL : "https://www.google.com/",
},
    {
    id : 2,
    ProjectImage : "assets/images/Portfolio/Pimg2.jpg",
    ProjectName : "Project Name",
    Category : "Graphic design",
    Client : "Company",
    ProjectDate : "03 March 2020",
    ProjectURLName : "www.example.com",
    ProjectURL : "https://www.google.com/",
},
{
    id : 3,
    ProjectImage : "assets/images/Portfolio/Pimg3.jpg",
    ProjectName : "Project Name",
    Category : "Graphic design",
    Client : "Company",
    ProjectDate : "12 April 2021",
    ProjectURLName : "www.youtube.com",
    ProjectURL : "https://www.youtube.com/",
},
{
    id : 4,
    ProjectImage : "assets/images/Portfolio/Pimg4.jpg",
    ProjectName : "Project Name",
    Category : "Graphic design",
    Client : "Company",
    ProjectDate : "01 March 2020",
    ProjectURLName : "www.example.com",
    ProjectURL : "https://www.google.com/",
},
{
    id : 5,
    ProjectImage : "assets/images/Portfolio/Pimg5.jpg",
    ProjectName : "Project Name",
    Category : "Graphic design",
    Client : "Company",
    ProjectDate : "01 March 2020",
    ProjectURLName : "www.example.com",
    ProjectURL : "https://www.google.com/",
},
{
    id : 6,
    ProjectImage : "assets/images/Portfolio/Pimg6.jpg",
    ProjectName : "Project Name",
    Category : "Graphic design",
    Client : "Company",
    ProjectDate : "30 May 2018",
    ProjectURLName : "www.example.com",
    ProjectURL : "https://www.google.com/",
},

]

const showingPopUp = document.querySelectorAll(".fa-plus");
const PopUp = document.querySelector(".MainPopUp");
const popupContent = document.querySelector(".Portfolio__popUp");

const ImageProject = document.querySelector(".Portfolio__image img");
const ProjectTitle = document.querySelector(".project__information h2");
const Category = document.querySelector(".project__information .Category");
const Client = document.querySelector(".project__information .Client");
const ProjectDate = document.querySelector(".project__information .ProjectDate");
const ProjectURLName = document.querySelector(".project__information .ProjectURL");


showingPopUp.forEach(element => {
    element.addEventListener("click",()=>{
        PopUp.classList.add("open")
        popupContent.classList.add("open")
        
        // dynamic PopUp Data
        const currentItem = element.getAttribute("data-target");
        const item =PopUpData[currentItem-1];
        console.log(item)
        ImageProject.src = item.ProjectImage
        ProjectTitle.textContent = item.ProjectName
        Category.textContent = item.Category
        Client.textContent = item.Client
        ProjectDate.textContent = item.ProjectDate
        ProjectURLName.textContent = item.ProjectURLName
        ProjectURLName.setAttribute("href",item.ProjectURL);
    })
});

PopUp.addEventListener("click",(e)=>{
        if (e.target.classList.contains("MainPopUp")) {
            PopUp.classList.remove("open")
            popupContent.classList.remove("open")    
        }
    })



// responsive mobile header
const toggleButton = document.querySelector(".mobileNavigation");
const headerSideBar = document.getElementById("header")

toggleButton.addEventListener("click",()=>{
    
    toggleButton.classList.toggle("open")
    headerSideBar.classList.toggle("open");
    
    if (navigations.classList.contains("open")) {
        
        navigations.classList.remove("open")
        ToggleNav();
    }
})

// toggle Navigations
const toggleNav = document.getElementById("toggleNav");
const navigations = document.querySelector(".navigations");

toggleNav.addEventListener("click",()=>{
    navigations.classList.toggle("open");

    if (navigations.classList.contains("open")) {
        toggleNav.textContent = "Close";
        toggleNav.classList.remove("btn-primary")
        toggleNav.classList.add("btn-danger")
    }else{
        ToggleNav();
    }
})

function ToggleNav() {
    toggleNav.classList.remove("btn-danger")
    toggleNav.classList.add("btn-primary")
    toggleNav.textContent = "For More";
}


// Animate Resume
window.addEventListener("scroll",()=>{
    // MainTitle Resume Animation
    const MainTitleResume = document.querySelector(".MainTitleResume");
    const MainTitlposition = MainTitleResume.getBoundingClientRect().top;
    //ArticleResume
    const articleResume = document.querySelector(".articleResume")
    const articleResumePosition = articleResume.getBoundingClientRect().top;
    //AsummaryResume
    const AsummaryResume = document.querySelector(".AsummaryResume")
    const AsummaryResumePosition = AsummaryResume.getBoundingClientRect().top;
    //AeducationResume
    const AeducationResume = document.querySelector(".AeducationResume")
    const AeducationResumePosition = AeducationResume.getBoundingClientRect().top;
    //skillsResume
    const skillsResume = document.querySelector(".skillsResume")
    const skillsResumePosition = skillsResume.getBoundingClientRect().top;
    //MainTitlePortfolio
    const MainTitlePortfolio = document.querySelector(".MainTitlePortfolio")
    const MainTitlePortfolioPosition = MainTitlePortfolio.getBoundingClientRect().top;
    //articlePortfolio
    const articlePortfolio = document.querySelector(".articlePortfolio")
    const articlePortfolioPosition = articlePortfolio.getBoundingClientRect().top;
    //portfolioContent
    const portfolioContent = document.querySelector(".portfolioContent")
    const portfolioContentPosition = portfolioContent.getBoundingClientRect().top;
    //MainTitleServices
    const MainTitleServices = document.querySelector(".MainTitleServices")
    const MainTitleServicesPosition = MainTitleServices.getBoundingClientRect().top;
    //cardService1
    const cardService1 = document.querySelector(".cardService1")
    const cardService1Position = cardService1.getBoundingClientRect().top;
    //cardService2
    const cardService2 = document.querySelector(".cardService2")
    const cardService2Position = cardService1.getBoundingClientRect().top;
    //cardService3
    const cardService3 = document.querySelector(".cardService3")
    const cardService3Position = cardService3.getBoundingClientRect().top;
    //MainTitletestimonial
    const MainTitletestimonial = document.querySelector(".MainTitletestimonial")
    const MainTitletestimonialPosition = cardService3.getBoundingClientRect().top;

    const screenPosition = window.innerHeight/1.5;
    const screenPositionportfolioContent = window.innerHeight;
    //MainTitletestimonial
    if (screenPosition>MainTitletestimonialPosition) {
        MainTitletestimonial.classList.add("active")
    }
    else{
        MainTitletestimonial.classList.remove("active");
    }
    
    //cardService3
    if (screenPosition>cardService3Position) {
        cardService3.classList.add("active")
    }
    else{
        cardService3.classList.remove("active");
    }

    //cardService2
    if (screenPosition>cardService2Position) {
        cardService2.classList.add("active")
    }
    else{
        cardService2.classList.remove("active");
    }

    //MainTitleServices
    if (screenPosition>cardService1Position) {
        cardService1.classList.add("active")
    }
    else{
        cardService1.classList.remove("active");
    }
    
    //MainTitleServices
    if (screenPosition>MainTitleServicesPosition) {
        MainTitleServices.classList.add("active")
    }
    else{
        MainTitleServices.classList.remove("active");
    }

    //portfolioContent
    if (screenPositionportfolioContent>portfolioContentPosition) {
        portfolioContent.classList.add("active")
    }
    else{
        portfolioContent.classList.remove("active");
    }

    //articlePortfolio
    if (screenPosition>articlePortfolioPosition) {
        articlePortfolio.classList.add("active")
    }
    else{
        articlePortfolio.classList.remove("active");
    }

    //skillsResume
    if (screenPosition>MainTitlePortfolioPosition) {
        MainTitlePortfolio.classList.add("active")
    }
    else{
        MainTitlePortfolio.classList.remove("active");
    }
    
    //skillsResume
    if (screenPosition>skillsResumePosition) {
        skillsResume.classList.add("active")
    }
    else{
        skillsResume.classList.remove("active");
    }
    
    //AeducationResume
    if (screenPosition>AeducationResumePosition) {
        AeducationResume.classList.add("active")
    }
    else{
        AeducationResume.classList.remove("active");
    }

    //AsummaryResume
    if (screenPosition>AsummaryResumePosition) {
        AsummaryResume.classList.add("active")
    }
    else{
        AsummaryResume.classList.remove("active");
    }

    //ArticleResume
    if (screenPosition>articleResumePosition) {
        articleResume.classList.add("active")
    }
    else{
        articleResume.classList.remove("active");
    }

    // MainTitle Resume Animation
    if (screenPosition>MainTitlposition) {
        MainTitleResume.classList.add("active")
    }else{
        MainTitleResume.classList.remove("active");
    }
})