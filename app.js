
// sidebar

var button1 = document.getElementById('toggle-btn');
button1.addEventListener('click', () => {
    document.getElementById('side-bar').classList.toggle('active');
});

// end of sidebar

// start slideshow


    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n)
    }

    function showSlides (n) {
        var i;
        var slides = document.getElementsByClassName('mySlides');
        var dots = document.getElementsByClassName('dot');
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }
        for (i = 0; i < dots.length;i++) {
            dots[1].className = dots[i].className.replace(' active', '')
        }
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].className += ' active';
    }

// end slide-show 

// scrolling horizontal 

const slider = document.querySelector('.rb-books-wrapper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('rb-active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('rb-active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('rb-active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    // scroll left
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
})

// prevent Dragging img 

var block = document.querySelector('.rb-books-img');
block.addEventListener('dragstart', (e) => {
    var img = document.createElement('img');
    e.dataTransfer.setDragImage(img, 0, 0);
});

// end of Prevent Dragging image

// end of scrolling horizontal