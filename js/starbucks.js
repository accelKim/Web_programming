window.addEventListener('scroll', function(){
    let favTexts = document.querySelectorAll(".fav-text")
    let value = scrollY;
    if(value > 400){
        favTexts.forEach((item) => item.style.animation = "slide-backward 2s ease-in-out forwards");
    } else {
        favTexts.forEach((item) => item.style.animation = "slide-forward 2s ease-in-out");
    }
})