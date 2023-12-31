
let html = document.documentElement
html.classList.add('skin')

function themeclick(value) {
    let alert = document.getElementById('alert')
    alert.innerHTML = `${value} Theme Enable`;

    let boxalert = document.querySelector('.alert')
    boxalert.classList.remove('alertnone')

    setTimeout(() => {
        boxalert.classList.add('alertnone')
    }, 1500)

    remove()
    console.log(html);
    html.classList.add(value)

}


const remove = () => {
    html.classList.remove('black')
    html.classList.remove('red')
    html.classList.remove('yellow')
    html.classList.remove('purple')
    html.classList.remove('skin')
}

let textarea = document.getElementById('textvalue')
let text = "";
let count = document.getElementById('count')
textarea.addEventListener('keyup', (Event) => {
    // console.log(Event.target.value)
    text = Event.target.value
    let char = text.length
    let word = text.split(" ").length - 1
    hide()
    count.innerHTML = `Total Characters is : ${char} AND Total Words is : ${word}`
    // console.log(char, word)
})

let toUpperCase = () => {
    textarea.value = text.toUpperCase()
    hide()

    text = text.toUpperCase()

}
let toLowerCase = () => {
    textarea.value = text.toLowerCase()
    hide()
    text = text.toLowerCase()
}
let ClearText = () => {
    hide()
    textarea.value = ""
    text = ""
}




let speak = () => {
    let msg = new SpeechSynthesisUtterance()
    msg.text = text;
    window.speechSynthesis.speak(msg)
}

let prevbtn = document.querySelector('.prev')
let click = true
let showprev = document.querySelector('.showprev')

prevbtn.addEventListener('click', () => {
    if (text == "") {
        showprev.style.height = '0px'
        showprev.innerHTML = ""
        showprev.style.padding = '0px'
    } else {
        if (click) {
            showprev.style.height = '250px'
            showprev.style.padding = '10px'
            click = false
            showprev.innerHTML = text
            prevbtn.innerHTML = "Hide Preview"

        } else {
            hide()

        }
    }

})


function hide() {
    showprev.style.height = '0px'
    click = true
    setTimeout(() => {
        showprev.innerHTML = ""
        showprev.style.padding = '0px'
        prevbtn.innerHTML = "Show Preview"

    }, 500)
}

// FAQ
let check = document.querySelectorAll('.check')
let div = document.querySelectorAll('.checkshow')
let arrows = document.querySelectorAll(('.arrow'))




const c = () => {



    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            div[i].classList.toggle("showcheck")
            console.log(arrows[i])
            arrows[i].classList.toggle('rotate')

        } else {
            div[i].classList.remove("showcheck")
            arrows[i].classList.remove('rotate')

        }
    }

}



c()


// typing test functionalyty
const setOdWOrds = [
    "My name is Hacker and I am a Programmers",
    "My favourit Languages are C++ C Python HTML Css Javascript",
    "What is Your Favourite Language"
]








const TypingpBTN = document.getElementById('TypingpBTN')

let starttime, endTime, TotalTime;

const close = document.getElementById('close')
const msgdiv = document.querySelector('.msgdiv')
const m1 = document.querySelector('.m1')
const message = document.querySelector('.msg')
const Resulthead = document.querySelector('.Resulthead')
const result = document.querySelector('.result')
const totaltime = document.querySelector('.totaltime')

const playgame = () => {
    let random = Math.floor(Math.random() * setOdWOrds.length)
    // console.log(random)

    m1.innerText = "Welcome Typing Speed Tester : Test Your Typing Speed"
    message.innerHTML = setOdWOrds[random]

    // get start time s
    starttime = new Date().getTime();


    TypingpBTN.innerText = "Done"
}

let finalMessage;

const endplay = () => {
    endTime = new Date().getTime();
    TotalTime = ((endTime - starttime) / 1000)

    let totalword = textarea.value

    let wordcount = wordcounter(totalword)


    let speed = Math.floor((wordcount / TotalTime) * 60)
    finalMessage = `Your typed at total ${speed} Words per minutes.....  `;


    compareText(message.innerText, totalword)

    console.log(TotalTime)
}


const wordcounter = (str) => {
    let response = str.split(" ").length;
    return response;
}


const compareText = (randword, userword) => {
    let word1 = randword.split(" ")
    let word2 = userword.split(" ")

    // console.log(word1, word2)

    let wordCount = 0;

    word1.forEach((elem, index) => {
        if (elem == word2[index]) {
            console.log(elem)

            wordCount++;
        }
    });

    let totalmessge = finalMessage + `correct word ${wordCount} Out of ${word1.length} `
    Resulthead.innerText = "--- RESULT ---"
    totaltime.innerText = `Total Taken Time is ${TotalTime} seconds`
    result.innerText = totalmessge

}


let disablebtn = document.querySelectorAll('.btn')





TypingpBTN.addEventListener('click', function () {

    if (this.innerText == 'Typing Test') {

        disablebtn.forEach(ele => {
            console.log(ele)
            ele.disabled = true
            ele.style.opacity = "0.6";
        })


        textarea.disabled = false;
        textarea.focus()
        textarea.value = ""
        Resulthead.innerText = ""
        result.innerText = ""
        totaltime.innerText = ""
        playgame()
    } else if (this.innerText == 'Done') {

        disablebtn.forEach(ele => {
            console.log(ele)
            ele.disabled = false
            ele.style.opacity = "1";
        })

        // textarea.disabled = true;
        endplay()

        TypingpBTN.innerText = "Thanks...."

        setTimeout(() => {
            TypingpBTN.innerText = "Typing Test"
        }, 600);
        close.style.display = "block"

    }
})


close.addEventListener('click', () => {

    m1.innerText = ""
    message.innerText = ""
    Resulthead.innerText = ""
    result.innerText = ""
    totaltime.innerText = ""
    close.style.display = "none"

})
