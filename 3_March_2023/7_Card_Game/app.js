const cardarray = [
    {
        "name": "cancel",
        "img": "./images/cancel.png"
    },
    {
        "name": "extra",
        "img": "./images/extra.png"
    },
    {
        "name": "favicon",
        "img": "./images/favicon.png"
    },
    {
        "name": "fgma",
        "img": "./images/fgma.png"
    },
    {
        "name": "js",
        "img": "./images/js.png"
    },
    {
        "name": "logo",
        "img": "./images/logo.png"
    }
]

let maindiv = document.querySelector('#card-section')
console.log(maindiv);
let gamecard = cardarray.concat(cardarray)





// genarate the random position 

const mixed = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i - 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}


const mixedarray = mixed(gamecard)
console.log(mixedarray);

for (let i = 0; i < mixedarray.length; i++) {
    let childdiv = document.createElement('div')
    childdiv.classList.add('card')
    childdiv.dataset.name = mixedarray[i].name
    // childdiv.style.backgroundImage = `url(${mixedarray[i].img})`

    let front_div = document.createElement('div')
    front_div.classList.add('front')

    let back_div = document.createElement('div')
    back_div.classList.add('back')
    back_div.style.backgroundImage = `url(${mixedarray[i].img})`

    maindiv.append(childdiv)

    childdiv.appendChild(front_div)
    childdiv.appendChild(back_div)
}


// step 4 
let counter = 0
let firstcard = ""
let secondcard = ""


const card_match = () => {
    let card_selected = document.querySelectorAll('.card-selected')
    console.log(card_selected)
    card_selected.forEach((curr) => {
        curr.classList.add('match')
    })

}

const reset_game = () => {
    counter = 0
    firstcard = ""
    secondcard = ""

    let card_selected = document.querySelectorAll('.card-selected')
    console.log(card_selected)
    card_selected.forEach((curr) => {
        curr.classList.remove('card-selected')
    })
}


maindiv.addEventListener('click', (e) => {
    let current = e.target
    counter++;
    if (current.id === "card-section") {
        return
    }
    if (counter <= 2) {
        if (counter === 1) {
            current.classList.add('card-selected')

            firstcard = current.parentNode.dataset.name
        }
        if (counter === 2) {
            current.classList.add('card-selected')
            secondcard = current.parentNode.dataset.name
        }

        if (firstcard !== "" && secondcard !== "") {
            if (firstcard === secondcard) {

                setTimeout(() => {
                    card_match()
                    reset_game()
                }, 1000)

            } else {
                setTimeout(() => {

                    reset_game()
                }, 1000)

            }
        }

    }



})