console.log("Notes app");

const title = document.getElementById('title')
const btnadd = document.getElementById('addnote')
const containnote = document.getElementById('containnote')


const savenote = () => {
    const notes = document.querySelectorAll("#textvalue")
    // console.log(notes.textvalue);

    let data = []
    // console.log(data);

    notes.forEach((value) => {
        console.log(value.textvalue);
        // data.push(value.textvalue)
    })

    // console.log(data);


    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }

}


const addnote = (text = "") => {
    // containnote.innerText = ""
    let div = document.createElement('div')
    div.classList.add('container2')
    // console.log(div);

    div.innerHTML = `
    <div class="heading flex">
     <h5>Note</h5>
     <div class="btn flex">
        <button class="save">save</button>
        <button class="delete">Delete</button>
     </div>
    </div>
    <textarea name="" id="textvalue" cols="30" rows="10">${text}</textarea>

    `;

    div.querySelector('.save').addEventListener('click', () => {
        // console.log("save");
        savenote()

    })

    div.querySelector("textarea").addEventListener("focusout", () => {
        savenote()
    })

    div.querySelector('.delete').addEventListener('click', () => {
        div.remove()
        savenote()
    })



    containnote.appendChild(div)
    savenote()

}




// <div class="container2">
//                 <div class="heading flex">
//                     <h5>Title hai bhai</h5>
//                     <div class="btn flex">
//                         <button>save</button>
//                         <button>Delete</button>
//                     </div>
//        </div>
//         <textarea name="" id="" cols="30" rows="10"></textarea>
//             </div>





btnadd.addEventListener('click', (e) => {
    e.preventDefault()
    if (title.value == "") {
        title.value = "Note"
    }
    //  else {
    //     console.log(title.value)

    // }

    addnote()
    savenote()
    title.value = ""

});


(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("notes"))
        // console.log(lsnotes);

        if (lsnotes == null) {
            // containnote.innerText = "Add Notes"
        } else {
            lsnotes.forEach((note) => {
                addnote(note)
            })
        }
    }

)()


