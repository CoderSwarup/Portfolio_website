let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let phno = document.getElementById('phno')
let password = document.getElementById('passwd')
let cpassword = document.getElementById('cpasswd')


// form Event 
form.addEventListener('submit', (e) => {
    e.preventDefault()
    validate()
})

// 
const sendata = (data, length) => {
    if (data === length) {
        alert("Form done")
    }
}


// All Doen submit
const allDone = () => {
    let form_control = document.getElementsByClassName('form-control ')
    let length = form_control.length - 1
    for (let index = 0; index < form_control.length; index++) {
        if (form_control[index].className === 'form-control fontsuccess') {
            let data = 0 + index
            sendata(data, length)
        } else {
            return false
        }

        // console.log(form_control.length, form_control[index].classList)
    }
}

// Email validation
const isEmail = (email) => {
    let Symbol = email.indexOf("@")
    if (Symbol <= 1) {
        console.log("symbol")
        return false
    }

    let dot = email.indexOf('.')
    if (dot < Symbol + 3) {
        console.log("dots")
        return false
    }

    if (dot === email.length - 1) {
        console.log("dot3")
        return false
    }
    // console.log(dot, email.length - 1, Symbol <= 1)
    return true
}

// Validate Function
const validate = () => {
    let usernameval = username.value.trim()
    let emailval = email.value
    let phnoval = phno.value
    let passwordval = password.value
    let cpasswordval = cpassword.value

    // console.log(usernameval, phnoval)

    // username validation
    let num = [0 - 9]
    let n = usernameval.indexOf(num)
    if (usernameval === "") {
        setError(username, "Username Cannot be blank")
    } else if (usernameval.length <= 4) {
        setError(username, "Username Contain Must be 5 Character")
    } else {
        setSuccess(username)
    }

    // Email Validation
    if (emailval === "") {
        setError(email, "Email Cannot be blank")
    } else if (!isEmail(emailval)) {
        setError(email, "Not Valid Email")
    } else {
        setSuccess(email)
    }

    // phone validation
    if (phnoval.length < 10) {
        setError(phno, "Invalid Number")
    } else {
        setSuccess(phno)
    }

    // password validation
    if (passwordval.length <= 5) {
        setError(password, "Password Must be 6 Character")
    } else if (passwordval === "") {
        setError(password, "Enter Your Password")
    } else {
        setSuccess(password)
    }

    // confirm Password
    if (cpasswordval !== passwordval) {
        setError(cpassword, "Password Dosent Match")
    } else if (passwordval === "") {
        setError(cpassword, "Enter Your Password")
    } else {
        setSuccess(cpassword)
    }

    // All Correct
    allDone();
}

// Error message
const setError = (input, msg) => {
    const form1 = input.parentElement;
    const Error = form1.querySelector('small')
    form1.classList.add('fonterror')
    // console.log(Error, form1)    
    Error.innerText = msg
    // const shake = form1.querySelector('input')
    // const shake2 = form1.querySelector(' .fa-circle-exclamation')
    // shake.style.animation = "shake 1s ease 1"

    form1.classList.add('shakeerr')

    setTimeout(() => {
        form1.classList.remove('shakeerr')
    }, 300)
}

// Success Message
const setSuccess = (input) => {
    const formSuccess = input.parentElement;
    formSuccess.classList.remove('fonterror')
    formSuccess.classList.add('fontsuccess')
}