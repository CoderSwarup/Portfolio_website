

console.log("TO TO LIST");
// input 
const todoinput = document.getElementById('todoinput')

// todoinput.addEventListener('keypress', (e) => {
//     //keydown
//     //keyup
//     console.log(e);
// })

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




const savenote = () => {

    const notes1 = document.querySelectorAll(".t")

    let data = []
    // console.log(data);

    notes1.forEach((value) => {
        // console.log(value.value);
        data.push(value.innerHTML)
    })

    // console.log(data);


    if (data.length === 0) {
        localStorage.removeItem("todos")
    } else {
        localStorage.setItem("todos", JSON.stringify(data))
    }

}


// todo list for others 

const addtodo = (item = "") => {
    // listitem.classList.add("todo-all")
    let listitem = document.createElement("div")

    listitem.innerHTML = `
    <h4 class="text t">${item}</h4>
    <img id="cross_img" src="./cross.png" alt="">`
    // console.log(listitem);

    listitem.addEventListener('click', function (e) {
        this.classList.toggle('todo-all')
    })


    listitem.querySelector("img").addEventListener('click', () => {
        listitem.remove()
        savenote()
    })

    // localStorage.setItem("list", listitem)

    // savenote()

    to_do_alldata.appendChild(listitem)
    savenote()
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
        // setTimeout(() => {
        addtodo(value)
        // }, 300)
        savenote()


        todoinput.value = ""
    }








})




const savenote2 = () => {

    const notes1 = document.querySelectorAll(".t2")

    let data = []
    // console.log(data);

    notes1.forEach((value) => {
        // console.log(value.value);
        data.push(value.innerHTML)
    })

    // console.log(data);


    if (data.length === 0) {
        localStorage.removeItem("urgent")
    } else {
        localStorage.setItem("urgent", JSON.stringify(data))
    }

}
// todo list for urgent 

const addtodo2 = (item) => {
    // listitem.classList.add("todo-all")
    let listitem = document.createElement("div")

    listitem.innerHTML = `
    <h4 class="text t2">${item}</h4>
    <img id="cross_img" src="./cross.png" alt="">`
    // console.log(listitem);

    listitem.addEventListener('click', function (e) {
        this.classList.toggle('todo-all')
    })


    listitem.querySelector("img").addEventListener('click', () => {
        listitem.remove()
        savenote2()
    })

    // localStorage.setItem("list", listitem)


    dataurgent.appendChild(listitem)
    savenote2()

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
        // setTimeout(() => {
        addtodo2(value)
        savenote2()
        // }, 300)
        todoinput.value = ""
    }

})






const savenote3 = () => {

    const notes1 = document.querySelectorAll(".t3")

    let data = []
    // console.log(data);

    notes1.forEach((value) => {
        // console.log(value.value);
        data.push(value.innerHTML)
    })

    // console.log(data);


    if (data.length === 0) {
        localStorage.removeItem("noturgebt")
    } else {
        localStorage.setItem("noturgebt", JSON.stringify(data))
    }

}
// data for not urgent 


const addtodo3 = (item) => {
    // listitem.classList.add("todo-all")
    let listitem = document.createElement("div")

    listitem.innerHTML = `
    <h4 class="text t3">${item}</h4>
    <img id="cross_img" src="./cross.png" alt="">`
    // console.log(listitem);

    listitem.addEventListener('click', function (e) {
        this.classList.toggle('todo-all')
    })


    listitem.querySelector("img").addEventListener('click', () => {
        listitem.remove()
        savenote3()
    })

    // localStorage.setItem("list", listitem)


    datanurgent.appendChild(listitem)

    savenote3()
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
            savenote3()
        }, 300)
        todoinput.value = ""
    }

})



const savenote4 = () => {

    const notes1 = document.querySelectorAll(".t4")

    let data = []
    // console.log(data);

    notes1.forEach((value) => {
        // console.log(value.value);
        data.push(value.innerHTML)
    })

    // console.log(data);


    if (data.length === 0) {
        localStorage.removeItem("imp")
    } else {
        localStorage.setItem("imp", JSON.stringify(data))
    }

}


// data for important


const addtodo4 = (item) => {
    // listitem.classList.add("todo-all")
    let listitem = document.createElement("div")

    listitem.innerHTML = `
    <h4 class="text t4">${item}</h4>
    <img id="cross_img" src="./cross.png" alt="">`
    // console.log(listitem);

    listitem.addEventListener('click', function (e) {
        this.classList.toggle('todo-all')
    })


    listitem.querySelector("img").addEventListener('click', () => {
        listitem.remove()
        savenote4()
    })

    // localStorage.setItem("list", listitem)


    impdata.appendChild(listitem)

    savenote4()

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
            savenote4()
        }, 300)
        todoinput.value = ""
    }

});





(
    function () {


        //others todo lisy
        const lsnotes = JSON.parse(localStorage.getItem("todos"))
        // console.log(lsnotes);

        if (lsnotes == null) {
            // containnote.innerText = "Add Notes"
        } else {
            lsnotes.forEach((note) => {
                addtodo(note)
            })
        }

        //urgent todo

        const lsnotes1 = JSON.parse(localStorage.getItem("urgent"))
        // console.log(lsnotes);

        if (lsnotes1 == null) {
            // containnote.innerText = "Add Notes"
        } else {
            lsnotes1.forEach((note) => {
                addtodo2(note)
            })
        }




        //noturgent todo

        const lsnotes2 = JSON.parse(localStorage.getItem("noturgebt"))
        // console.log(lsnotes);

        if (lsnotes2 == null) {
            // containnote.innerText = "Add Notes"
        } else {
            lsnotes2.forEach((note) => {
                addtodo3(note)
            })
        }


        //imp todo

        const lsnotes3 = JSON.parse(localStorage.getItem("imp"))
        // console.log(lsnotes);

        if (lsnotes3 == null) {
            // containnote.innerText = "Add Notes"
        } else {
            lsnotes3.forEach((note) => {
                addtodo4(note)
            })
        }
    }



)()










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













