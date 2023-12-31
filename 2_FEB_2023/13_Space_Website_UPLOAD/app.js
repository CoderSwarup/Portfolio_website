
(function () {
    let social = document.querySelectorAll('.social-links div')
    social.forEach((ele, index) => {
        ele.style.animation = ` move .6s cubic-bezier(0.1, 0.6, 0.7, 0.1) ${index / 5}s forwards`
    })


    let rocket_animation = document.querySelectorAll('.s')
    let rocket = document.querySelector('.rocket')

    let trigger = window.innerHeight / 5;
    let rocketoffsettop = rocket.offsetTop;

    let trigger2 = window.innerHeight / 7;
    let thirdoffsettop = rocket_animation[2].offsetTop

    document.addEventListener('scroll', (e) => {

        if (window.scrollY > (rocketoffsettop - trigger)) {
            rocket_animation[0].classList.add('active')
            rocket_animation[1].classList.add('active')

        } else {
            rocket_animation[0].classList.remove('active')
            rocket_animation[1].classList.remove('active')
        }

        if (window.scrollY > (thirdoffsettop - trigger2)) {
            rocket_animation[2].classList.add('active')
        } else {
            rocket_animation[2].classList.remove('active')
        }
    })
})();

let toggle = document.querySelector('.toggle')
let nav = document.querySelector('.navbar')
toggle.addEventListener('click', () => {
    nav.classList.toggle('menu')
})