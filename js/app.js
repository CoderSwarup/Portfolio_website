$(document).ready(function () {
  $('.slider').slick({
    autoplay: 100,
    arrows: false,
    dots: true,
    speed: 1000,
    appendDots: '.slider-dots',
    dotsClass: 'dots'
  });


  let hamberger = document.querySelector('.hamberger');
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');

  hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
  });

  times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
  });

  let close = document.querySelectorAll('.close')
  close.forEach((ele) => {
    ele.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    })
  })



  let mname = document.querySelector('.name')
  let textarr = ["Fronted Dev", "Backend Dev", "WebDeveloper"]
  let index = 0
  let arri = 0

  let my = () => {
    let text = textarr[arri]

    index++
    mname.innerHTML = text.slice(0, index)

    if (index >= text.length) {
      arri++
      if (arri >= textarr.length) {
        arri = 0
      }
      index = 0
      setTimeout(() => {
        my()
      }, 4000)


    } else {
      setTimeout(() => {
        my()
      }, 400)
    }


  }
  my()


});