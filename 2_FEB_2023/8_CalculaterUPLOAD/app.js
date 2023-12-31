let string = ""
const inputbody = document.querySelector('.inputbody')
let btns = document.querySelectorAll('button')
// console.log(btns.length)

let html = document.documentElement
html.classList.add('light')

let clickaudio = new Audio('./MouseClick.mp3')

Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // console.log(e.target)

        if (e.target.innerHTML === 'C') {
            string = ""
            inputbody.value = string;

        } else if (e.target.innerHTML === '=') {
            try {
                inputbody.value = eval(string)

            } catch (e) {
                inputbody.value = "Syntax Error"
            }
            string = inputbody.value
        } else if (e.target.innerHTML === 'Del') {
            // console.log(string.length)
            if (inputbody.value === "Syntax Error" || inputbody.value === "Infinity" || inputbody.value == "undefined") {
                string = ""
            }
            string = string.substr(0, string.length - 1)
            // console.log(string)
            inputbody.value = string;

        }
        else {
            if (inputbody.value === "Syntax Error" || inputbody.value == "undefined" || inputbody.value === "Infinity") {
                string = ""
            }
            string += e.target.innerHTML
            inputbody.value = string;
        }
        clickaudio.play()
    })
})


let click = document.querySelector('.click')
click.addEventListener('click', () => {

    if (html.classList == 'light') {
        html.classList.remove('light')
        html.classList.add('dark')
    } else {
        html.classList.remove('dark')
        html.classList.add('light')
    }
    clickaudio.play()

})