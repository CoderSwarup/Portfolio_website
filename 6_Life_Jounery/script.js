console.log("JAVASCRIPT")

let IsDob = false;

let DateBirth;

const settingicon = document.getElementById('Settingicon')
// console.log(settingicon)
const settingContent = document.getElementById('settingcontent')
// console.log(settingContent)

let initialtext = document.getElementById('starttext');
let afterDobtext = document.getElementById('Lasttext');
let Dobinput = document.getElementById('DobInput');
let addbtn = document.getElementById('DobBtn')


let year = document.getElementById('year')
let month = document.getElementById('Month')
let day = document.getElementById('days')
let hour = document.getElementById('hours')
let minitue = document.getElementById('minute')
let sec = document.getElementById('seconds')




let makedigit = (num) => {
    return num > 9 ? num : `0${num}`
}

// toggle add date 

const ToggleDateB = () => {
    // if (IsDob) {
    //     settingContent.classList.add('hide')
    // } else {
    //     settingContent.classList.remove('hide')

    // }
    // IsDob = !IsDob

    // console.log(IsDob)


    if (settingContent.style.display == 'none') {
        settingContent.style.display = 'block'
    } else {
        settingContent.style.display = 'none'
    }
}

//Update date 

const updatedate = () => {
    let currentdate = new Date()
    // console.log(currentdate);
    let diff = currentdate - DateBirth;
    // console.log(diff);

    let calcyear = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))

    // let calmonth = Math.floor((diff / (1000 * 60 * 60 * 24 * 365)) % 12)
    let calmonth = Math.floor(diff / (1000 * 3600 * 366) % 12) // by me 

    // let caldays = Math.floor((diff / (1000 * 60 * 60 * 24)) % 31)
    let caldays = Math.floor(diff / 1000 /   (3600 * 24 ) % 30)
    // let caldays = Math.floor((diff / 1000) / 3600 / 24)  // total days 

    let calhour = Math.floor((diff / (1000 * 60 * 60)) % 24)
    let calcmin = Math.floor((diff / (1000 * 60)) % 60)

    let calsec = Math.floor((diff / 1000) % 60)
    // console.log(calcyear , calmonth ,caldays , calhour , calmin , calsec);

    year.innerHTML = makedigit(calcyear)
    month.innerHTML = makedigit(calmonth)
    day.innerHTML = makedigit(caldays)
    hour.innerHTML = makedigit(calhour)
    minitue.innerHTML = makedigit(calcmin)
    sec.innerHTML = makedigit(calsec)

}


// store local storage


const localstorageset = () => {

    let year = localStorage.getItem('year')
    let month = localStorage.getItem('month')
    let day = localStorage.getItem('day')
    let hour = localStorage.getItem('hour')

    let minutes = localStorage.getItem('minutes')
    let seconds = localStorage.getItem('seconds')


    if (year && month && day) {
        DateBirth = new Date(year, month, day)
    }



    updatedate()

}


const contacttoggle = () => {
    updatedate()
    if (DateBirth) {


        localStorage.setItem("minutes", DateBirth.getMinutes())
        localStorage.setItem("seconds", DateBirth.getSeconds())


  

        initialtext.classList.add('hide')
        afterDobtext.classList.remove('hide')
        setInterval(() => {
            updatedate()
        }, 1000)
    } else {
        initialtext.classList.remove('hide')
        afterDobtext.classList.add('hide')
    }
}



//set date 

const setDob = () => {
    const DateBirthstring = Dobinput.value
    DateBirth = DateBirthstring ? new Date(DateBirthstring) : null
    // console.log(DateBirth)


    console.log(DateBirth);


    if (DateBirth) {

        localStorage.setItem("year", DateBirth.getFullYear())
        localStorage.setItem("month", DateBirth.getMonth())
        localStorage.setItem("day", DateBirth.getDate())
        localStorage.setItem("hour", DateBirth.getHours())
        localStorage.setItem("minutes", DateBirth.getMinutes())
        localStorage.setItem("seconds", DateBirth.getSeconds())




    }



    setInterval(() => {
        updatedate()
    }, 1000)
    contacttoggle();

}


// setDob()
localstorageset();
contacttoggle()





settingicon.addEventListener('click', ToggleDateB)
addbtn.addEventListener('click', setDob)


