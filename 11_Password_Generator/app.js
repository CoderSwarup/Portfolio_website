

// all selectors 
const inputcontainer = document.getElementById('inputc')
const rangeinput = document.getElementById('rangeinput')
const label = document.getElementById('label')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')

const btn = document.getElementById('btn')


// all values 

const UPPERCASE = "QWERTYUIOPASDFGHJKLZXCVBNM"
const LOWECASE = "mnbvcxzasdfghjklpoiuytrewq"
const NUMBERS = "1234567890"
const SYMBOLS = "`~!@#$%^&*(){}|\?/|\<>,."

// console.log(UPPERCASE.length, LOWECASE.length);


//input 
rangeinput.addEventListener('input', (e) => {
    label.innerText = e.target.value
})





// rnadom value generate

const generatevalue = (dataset) => {
    let random = dataset[Math.floor(Math.random() * dataset.length)]
    //   console.log(random);
    return random

}

// generatevalue(NUMBERS)


const passgenerate = () => {
    let password = ""

    if (uppercase.checked) {
        password += generatevalue(UPPERCASE)
    }
    if (lowercase.checked) {
        password += generatevalue(LOWECASE)
    }
    if (numbers.checked) {
        password += generatevalue(NUMBERS)
    }
    if (symbols.checked) {
        password += generatevalue(SYMBOLS)
    }

    return password

}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let password = "";
    let not = "";
    let length = rangeinput.value
    // console.log(length);
    if (uppercase.checked || lowercase.checked || numbers.checked || symbols.checked) {
        let newpass = ""
        for (let i = 4; i <= 20; i++) {
            newpass += passgenerate()
        }
        // console.log(newpass);
        for (let i = 0; i < length; i++) {
            password += newpass[Math.floor(Math.random() * newpass.length)]
        }
        // console.log(a.length , a);
        inputcontainer.innerHTML = password


    } else {
        for (let i = 0; i < length; i++) {
            let dataset = "QRST123sjowp4!@#$FGHM2595@#$$sjsuj"
            not += dataset[Math.floor(Math.random() * dataset.length)]
        }
        // console.log(not);
        inputcontainer.innerHTML = not
    }

})


//unique password generator

const BTN = document.getElementById('BTN')
const Funny = document.getElementById('funny')
const hacker = document.getElementById('hacker')
const stronge = document.getElementById('stronge')


console.log(BTN, Funny, hacker, stronge);

const funnydata = ['Enter', '0000', '101010 ', 'Dekh kya Raha hai', 'Hello', 'Kya Bhai', 'Sab Thik', 'Kaisa hai', 'Harry is Best']
const hackerdata = ['#👨🏻‍💻👨🏻‍💻#(((101Sdid', '#)18(🔏23412345', 'NWq!@#487^&🏆👨🏻‍💻', 'De!@#)%(%$*👿', 'HACK1!2@##$$IASK']
const superdata = "H!@#Aasiejfmc<>:)&(^WETPSKRI!@#^&**(("



const generateunique = (data) => {
    let ouputdata = "";
    ouputdata += data[Math.floor(Math.random() * data.length)]
    return ouputdata
}

BTN.addEventListener('click', (e) => {
    e.preventDefault()
    if (Funny.checked) {
        const data = generateunique(funnydata)
        // console.log(data);
        inputcontainer.innerHTML = data
    }
    if (hacker.checked) {
        const data = generateunique(hackerdata)
        // console.log(data);
        inputcontainer.innerHTML = data

    }
    if (stronge.checked) {
        let data = ""
        for (let i = 0; i <= 8; i++) {
            data += superdata[Math.floor(Math.random() * superdata.length)]
        }
        inputcontainer.innerHTML = data
        // console.log(data);
    } if (!stronge.checked && !hacker.checked && !Funny.checked) {
        inputcontainer.innerHTML = "Select To Kar Be"
    }



})





inputcontainer.addEventListener('click', (e) => {
    navigator.clipboard.writeText(inputcontainer.innerText)
        .then(() => {
            alert("PASSWOR IS COPIED!...")
        })
})
// let checkboxes = document.querySelector('.checkboxes')
// let newbtn = document.getElementById('newbtn')
// newbtn.addEventListener('click', (e) => {
//     e.preventDefault()

//     checkboxes.innerHTML = "HELLO"
//     // alert("hello")
// })