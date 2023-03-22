console.log("TO TO LIST");
// input 
const todoinput = document.getElementById('todoinput')

todoinput.addEventListener('keypress', (e) => {
    //keydown
    //keyup
    console.log(e);
})

// input btns 
const allbtn = document.getElementById('forallbtn')
const btnurgent = document.getElementById('btnurgent')
const btnnoturgent = document.getElementById('btnnoturgent')
const btnimp = document.getElementById('btnimp')


// todos divs 
const to_do_alldata = document.querySelector('.alldata')

const dataurgent = document.querySelector('.dataurgent')
const datanurgent = document.querySelector('.datanurgent')
const impdata = document.querySelector('.impdata')

// todo list for others 



// const show() {

// }

const addtodo = (item) => {
    // listitem.classList.add("todo-all")
    let listitem = document.createElement("div")



    listitem.innerHTML = `
    <h4 class="text">${item}</h4>
    <img id="cross_img" src="./cross.png" alt="">`
    console.log(listitem);

    listitem.addEventListener('click', function (e) {
        this.classList.toggle('todo-all')
    })


    listitem.querySelector("img").addEventListener('click', () => {
        listitem.remove()
    })

    // localStorage.setItem("list", listitem)


    to_do_alldata.appendChild(listitem)


}



allbtn.addEventListener('click', (e) => {
    e.preventDefault()
    let allT = document.getElementById('allT')
    allT.checked = true
    if (!todoinput.value) {
        // console.log("hhhh");
        alert("please add todo")
    } else {
        const value = todoinput.value
        // console.log(value);
        setTimeout(() => {
            addtodo(value)
        }, 300)

        todoinput.value = ""
    }









})



// todo list for urgent 

const addtodo2 = (item) => {
    // listitem.classList.add("todo-all")
    let listitem = document.createElement("div")

    listitem.innerHTML = `
    <h4 class="text">${item}</h4>
    <img id="cross_img" src="./cross.png" alt="">`
    // console.log(listitem);

    listitem.addEventListener('click', function (e) {
        this.classList.toggle('todo-all')
    })


    listitem.querySelector("img").addEventListener('click', () => {
        listitem.remove()
    })

    // localStorage.setItem("list", listitem)


    dataurgent.appendChild(listitem)


}



btnurgent.addEventListener('click', (e) => {

    e.preventDefault()

    let UrgentT = document.getElementById('UrgentT')
    // console.log(UrgentT.checked);
    UrgentT.checked = true

    if (!todoinput.value) {
        // console.log("hhhh");
        alert("please add todo")
    } else {
        const value = todoinput.value
        // console.log(value);
        setTimeout(() => {
            addtodo2(value)
        }, 300)
        todoinput.value = ""
    }

})

// data for not urgent 


const addtodo3 = (item) => {
    // listitem.classList.add("todo-all")
    let listitem = document.createElement("div")

    listitem.innerHTML = `
    <h4 class="text">${item}</h4>
    <img id="cross_img" src="./cross.png" alt="">`
    // console.log(listitem);

    listitem.addEventListener('click', function (e) {
        this.classList.toggle('todo-all')
    })


    listitem.querySelector("img").addEventListener('click', () => {
        listitem.remove()
    })

    // localStorage.setItem("list", listitem)


    datanurgent.appendChild(listitem)


}



btnnoturgent.addEventListener('click', (e) => {
    e.preventDefault()
    let NUrgentT = document.getElementById('NUrgentT')
    NUrgentT.checked = true
    if (!todoinput.value) {
        // console.log("hhhh");
        alert("please add todo")
    } else {
        const value = todoinput.value
        // console.log(value);
        setTimeout(() => {
            addtodo3(value)
        }, 300)
        todoinput.value = ""
    }

})




// data for important


const addtodo4 = (item) => {
    // listitem.classList.add("todo-all")
    let listitem = document.createElement("div")

    listitem.innerHTML = `
    <h4 class="text">${item}</h4>
    <img id="cross_img" src="./cross.png" alt="">`
    // console.log(listitem);

    listitem.addEventListener('click', function (e) {
        this.classList.toggle('todo-all')
    })


    listitem.querySelector("img").addEventListener('click', () => {
        listitem.remove()
    })

    // localStorage.setItem("list", listitem)


    impdata.appendChild(listitem)


}



btnimp.addEventListener('click', (e) => {
    e.preventDefault()
    let NImpT = document.getElementById('NImpT')
    NImpT.checked = true
    if (!todoinput.value) {
        // console.log("hhhh");
        alert("please add todo")
    } else {
        const value = todoinput.value
        // console.log(value);
        setTimeout(() => {
            addtodo4(value)
        }, 300)
        todoinput.value = ""
    }

})
















// const todoforall = document.getElementById('todo-all-id')
// const cross = document.getElementById('cross_img')
// console.log(todoforall);





// todoforall.addEventListener('click', (e) => {
//     e.preventDefault()
//     // alert("click")
//     todoforall.classList.toggle("todo-all2")
// })

// cross.addEventListener('click', (e) => {
//     e.preventDefault()
//     // alert("hrlo")
//     todoforall.classList.add("none")
// })






