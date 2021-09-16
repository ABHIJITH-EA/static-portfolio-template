window.addEventListener("load", () => {
    let darkMode = document.querySelector("header div.night-mode");
    imageIndex = 1;
    showSlides(imageIndex);
    const hamburger = document.querySelector("header nav div.hamburger");
    const navMenu = document.querySelector("header nav ul");
    let leftArrow = document.getElementById("left-arrow");
    let rightArrow = document.getElementById("right-arrow");
    let dribbleIcon = document.querySelector("#contacts div.map div.bottom div.left i.fa-globe");
    let instagramIcon = document.querySelector("#contacts div.map div.bottom div.left i.fa-instagram");
    let youtubeIcon = document.querySelector("#contacts div.map div.bottom div.left i.fa-youtube");
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {imageIndex = 1}    
        if (n < 1) {imageIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[imageIndex-1].style.display = "block";
    }
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    hamburger.addEventListener("click", mobileMenu);
    darkMode.addEventListener("click", () => {
        let body = document.body;
        body.classList.toggle("dark-mode");
        document.querySelector("header div.night-mode a i").classList.toggle("fa-sun");
        document.querySelector("header div.night-mode a").classList.toggle("dark-mode-color");
        document.querySelector("header h1 a").classList.toggle("dark-mode-color");
    });
    leftArrow.addEventListener("click", ()=>{
        showSlides(imageIndex -= 1);
    });
    rightArrow.addEventListener("click", ()=>{
        showSlides(imageIndex += 1);
    });
    dribbleIcon.addEventListener("mouseover", ()=> {
        document.querySelector("#contacts div.map div.bottom div.left div.highlights span.highlight:first-child").style.display = "inline-block";
    });
    dribbleIcon.addEventListener("mouseleave", ()=> {
        document.querySelector("#contacts div.map div.bottom div.left div.highlights span.highlight:first-child").style.display = "none";
    });
    instagramIcon.addEventListener("mouseover", ()=> {
        document.querySelector("#contacts div.map div.bottom div.left div.highlights span.highlight:nth-child(2)").style.display = "inline-block";
    });
    instagramIcon.addEventListener("mouseleave", ()=> {
        document.querySelector("#contacts div.map div.bottom div.left div.highlights span.highlight:nth-child(2)").style.display = "none";
    });
    youtubeIcon.addEventListener("mouseover", ()=> {
        document.querySelector("#contacts div.map div.bottom div.left div.highlights span.highlight:last-child").style.display = "inline-block";
    });
    youtubeIcon.addEventListener("mouseleave", ()=> {
        document.querySelector("#contacts div.map div.bottom div.left div.highlights span.highlight:nth-child(3)").style.display = "none";
    });
});