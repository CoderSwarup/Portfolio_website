console.log("QUIZ APP ");

const showq = document.getElementById('showq')
let storeans;
let showScore = document.getElementById('score')
let score = 0;
let questionform = document.getElementById('qform')
let inputans = document.getElementById('ans')
let finalans = document.getElementById('final')
const randomnum = (min, max) => {
    const num1 = Math.floor((Math.random() * ((max - min) + 1)) + min)
    // console.log(num1);
    return num1;

}


const generateQuestion = () => {


    const num1 = randomnum(1, 20)
    const num2 = randomnum(1, 20)
    let new1 = +(num1 / num2).toFixed(0)
   

    const ans = [
        {
            ans: num1 + num2,
            que: `Q. What is ${num1} + ${num2} ?`,
        },
        {
            ans: num1 - num2,
            que: `Q. What is ${num1} - ${num2} ?`,
        },
        {
            ans: num1 * num2,
            que: `Q. What is ${num1} * ${num2} ?`,
        },
        {
            ans: +(num1 / num2).toFixed(2),
            que: `Q. What is ${num1} / ${num2} ?`,
        },
    ]
    // console.log(num1, num2, new1);


    const newrand = Math.floor((Math.random() * 4) + 0);


    // console.log(newrand,ans[newrand].que, ans[newrand].ans);


    const genaretedquestion = ans[newrand].que;
    const newanswer = ans[newrand].ans;
    return [genaretedquestion, newanswer]

}

generateQuestion()


// let a =generateQuestion()
// console.log(a);


const showquestion = () => {

    let [q, a] = generateQuestion()
    // console.log(q, a);
    showq.innerHTML = q
    showScore.innerText = localStorage.getItem('score1')
    storeans = a
}

showquestion()

questionform.addEventListener('submit', (e) => {
    e.preventDefault()

    let b = new FormData(questionform)
    const userans = +b.get("answer")
    // console.log(typeof (userans), userans);
    // console.log(storeans);

    if (userans == storeans) {
        // console.log("yessssss");fi

        finalans.innerHTML = "👏 Previous Question Answer is Correct 🏆"
        score++;
    } else {
        finalans.innerHTML = `Previous Question Answer is : ${storeans}`
        score--;
    }

    // console.log(score);
    showScore.innerHTML = score;
    localStorage.setItem('score1', score)


    e.target.reset();
    showquestion()
    
    // finalans.target.reset()
})