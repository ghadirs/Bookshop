// slideshow
var slideIndex = 1;
showSlides(slideIndex)


function currentSlide (n) {
        showSlides(slideIndex = n);
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}


function showSlides (n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('ssh-dot');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0;i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0;i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' .active', '');
    } 
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
}

// slideshow end


// sidebar 

var sbBtn =  document.querySelector('.sb-btn');
var sideBar = document.getElementById('side-bar');

sbBtn.addEventListener('click', () => {
    console.log('123')
    sideBar.classList.toggle('active');
    document.getElementById('spanbt2').classList.toggle('active');
    document.getElementById('spanbt1').classList.toggle('active');
    document.getElementById('spanbt3').classList.toggle('active');
});



// end of sidebar