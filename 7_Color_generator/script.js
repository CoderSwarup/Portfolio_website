
let colorcode = document.getElementById('hexcolor')
let Button = document.getElementById('changebtn')
let div1 = document.getElementsByClassName('main-color')


const generatecolor = () => {

    let randnum = Math.floor(Math.random() * 16787215)

    const randcode = `#${randnum.toString(16)}`
    // console.log(randnum , randcode) ;

    // div style change 
    div1[0].style.backgroundColor = randcode;

    colorcode.style.color = randcode
    colorcode.innerHTML = randcode


    // copy code 
    navigator.clipboard.writeText(randcode)




    // let randnum1 = Math.floor(Math.random() * 16777215)
    // const randcode1 = `#${randnum1.toString(16)}`

    // let randnum2 = Math.floor(Math.random() * 14782897)
    // const randcode2 = `#${randnum2.toString(16)}`

    // console.log(randcode1, randcode2);

}


Button.addEventListener('click', generatecolor)