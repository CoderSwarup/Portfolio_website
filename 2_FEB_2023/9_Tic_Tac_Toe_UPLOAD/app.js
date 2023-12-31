// Music


// logoc
let rand = ["X", "O"]
let trun = rand[Math.floor(Math.random() * rand.length)];
let info_trun = document.querySelector('.info_msg')
info_trun.innerText = `Trun for 👉🏻  ${trun} `
let gameover = false;
let line = document.querySelector('.line')
let DanceImg = document.querySelector('.dance')
let winAudio = new Audio('win.mp3')
// Check trun
const change_trun = () => {
    return trun === "X" ? "O" : "X";

}

// check Win
const CheckWin = () => {
    let box_text = document.getElementsByClassName('text')
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -9, 15, 90],
        [1, 4, 7, 1, 15, 90],
        [2, 5, 8, 11, 15, 90],
        [0, 4, 8, 1, 15, 45],
        [2, 4, 6, 1, 15, -45],
    ];

    wins.forEach(e => {
        if ((box_text[e[0]].innerText === box_text[e[1]].innerText) && (box_text[e[2]].innerText === box_text[e[1]].innerText) && (box_text[e[0]].innerText !== '')) {
            // console.log(box_text[e[0]])
            gameover = true;
            info_trun.innerText = "Congragulations " + box_text[e[0]].innerText + " Won";
            line.style.height = '3px'
            line.style.width = '27vw'
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            DanceImg.style.visibility = "visible"
            setTimeout(() => {
                DanceImg.style.visibility = "hidden"

            }, 10000)
            winAudio.play()
            // final win image display 
        }
    })

}


// Game Logic

let boxes = document.querySelectorAll('.box')

Array.from(boxes).forEach(ele => {

    let boxText = ele.querySelector('.text')
    ele.addEventListener('click', (e) => {
        if (boxText.innerText == "") {
            boxText.innerText = trun;
            trun = change_trun();
            // // audio trun
            CheckWin();
            if (!gameover) {
                info_trun.innerText = `Trun for 👉🏻 ${trun}`
            }
        }
        // console.log(boxText.innerText)
    })

})

// Reset all Function 
const Reset = () => {
    let boxText = document.querySelectorAll('.text')
    // console.log(boxText.length)
    boxText.forEach(ele => {
        ele.innerText = ""
    })
    trun = change_trun()
    info_trun.innerText = `Trun for 👉🏻  ${trun} `
    line.style.height = '0px'
    line.style.width = '0vw'
    DanceImg.style.visibility = "hidden"
    winAudio.pause()

}

let resetbtn = document.querySelector('#btn')
resetbtn.addEventListener('click', () => {
    Reset()
})