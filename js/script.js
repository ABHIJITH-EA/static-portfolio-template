window.addEventListener("load", () => {
    let darkMode = document.querySelector("header div.night-mode");
    let changeText = document.getElementById("text-change");
    let text = ["UI specialist", "Marvel sann"];
    let index = 0;
    imageIndex = 1;
    showSlides(imageIndex);
    const hamburger = document.querySelector("header nav div.hamburger");
    const navMenu = document.querySelector("header nav ul");
    leftArrow = document.getElementById("left-arrow");
    rightArrow = document.getElementById("right-arrow");
    
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
    });
    setInterval(()=> {
        changeText.innerText = text[index % text.length]
        index++;
    }, 3000);

    leftArrow.addEventListener("click", ()=>{
        showSlides(imageIndex -= 1);
    });
    rightArrow.addEventListener("click", ()=>{
        showSlides(imageIndex += 1);
    });
});