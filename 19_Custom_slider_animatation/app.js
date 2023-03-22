
const nav = document.getElementById('nav')
const btn = document.getElementById('toggle')


btn.addEventListener('click', () => {
    // console.log("heheh");
   nav.classList.toggle('add')
})

$(document).ready(function () {
    $('.slider').slick({
        prevArrow: '.prearrow',
        nextArrow: '.nextarrow',
        autoplay: true,
        fade: true,
        autoplaySpeed: '5000'
    });


});


// credit link
// https://kenwheeler.github.io/slick/

/*
 add followin in html

 top 
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />


 bottom

    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
 

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>


// add on js 
$(document).ready(function(){

    $('.slider').slick({
        autoplay:true, // auto slide 
        fade:true,  // fade in out 
        autoplaySpeed:'6000', // time when switch slide 
        dots:true,  // gives others ul dots 
        appendDots:'.slider-dots', // where the dots is add 
        prevArrow:".prev-btn",  // buttons previous
        nextArrow:".next-btn",  // buttons foe next
    });

});
    
*/