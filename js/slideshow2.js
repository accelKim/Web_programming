var current
showSlides2();

function showSlides2(){
    var slides2 = document.querySelectorAll("#slides2 > img");
    for(let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = 'none';
    }
    current++;
    if(current > slides2.length)
     current =1;
    slides2[current-1].style.display = 'block';
    setTimeout(showSlides2,1500);
}