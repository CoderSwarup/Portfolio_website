
const b = document.getElementById('btn')
const form = document.getElementById('formselect')

const queshow = document.getElementById('ques')
const options = document.querySelectorAll('.lablename1')
const resetall = document.querySelector('.container')
const score = document.getElementById('score1')
// console.log(options, resetall);

const Questions = [
    {
        'que': 'What is HTML?',
        'a': 'Hyper Trend Language',
        'b': 'Hyper Text Markup Language',
        'c': 'Hybrid text markup language',
        'd': 'Hyper Text Language',
        'correct': 'b'
    },
    {
        'que': 'What is css?',
        'a': 'Cascading Style sheet',
        'b': 'Content case sheet',
        'c': 'Cascad style sheet',
        'd': 'cascading sheet style',
        'correct': 'a'
    },
    {
        'que': 'When Release JavaScript?',
        'a': '1990',
        'b': '1999',
        'c': '1988',
        'd': '1995',
        'correct': 'd'
    },
]

let total = Questions.length

let index = 0;
let score1 = 0;
let correctans = 0;
console.log(total);


const showques = () => {
    if (index === total) {
        resetall.innerHTML = `Thanks For Participate <br>
            Score Is : ${correctans} / ${total}`

    } else {

        // console.log(Questions[index].que);
        queshow.innerHTML = Questions[index].que;
        options[0].innerHTML = Questions[index].a;
        options[1].innerHTML = Questions[index].b;
        options[2].innerHTML = Questions[index].c;
        options[3].innerHTML = Questions[index].d;
    }


}

showques()











form.addEventListener('submit', (e) => {
    e.preventDefault()



    const n = document.getElementsByName('check');

    let value;
    let i = 0
    for (i = 0; i < n.length; i++) {
        if (n[i].checked) {
            value = n[i].value
        }
        n[i].checked = false
    }


    console.log(typeof (value), typeof (Questions[index].correct));

    if (value === Questions[index].correct) {
        score1++;
        correctans++;
    } else {
        score1--;
    }


    score.innerHTML = score1
    index++;
    showques()

})










// ##############################
// EXtra
// const lab = document.getElementsByClassName('lablename1')
// lab[0].innerHTML = "Options";


    // const formdata = new FormData(form);
    // console.log(formdata);
    // const data = {}
    // formdata.forEach((value, key) => {
    //     data[key] = value

    // })

    // console.log(data);

    // let totalmark = data.check
    // console.log(totalmark);




    // b.addEventListener('click', (e) => {
//     e.preventDefault();
//     const n = document.getElementsByName('check');
//     const l = document.querySelectorAll('.labelname')
//     // console.log(n.length);

//     let value;
//     let i = 0
//     for (i = 0; i < n.length; i++) {
//         if (n[i].checked) {
//             value = n[i].value
//         }
//         n[i].checked = false
//     }
//     console.log(value);
// })
