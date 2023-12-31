
console.log("Expense tracker")

const total_price = document.getElementById('total_price')
const text_input = document.getElementById('text_input')
const amount_input = document.getElementById('amount_input')
const credit_btn = document.getElementById('credit_btn')
const debit_btn = document.getElementById('debit_btn')
const transcation_list = document.querySelector('.transcation-list')
// console.table(total_price , text_input , amount_input , credit_btn , debit_btn)

let earning = document.getElementById('earning')
let expense = document.getElementById('expense')

let total = 0;
let add = 0;
let debit = 0;

function totalPrice() {
    total_price.innerHTML = `₹ ${total}`
    earning.innerHTML = `₹ ${add}`
    expense.innerHTML = `₹ ${debit}`
}




const savenote = () => {
    const notes = document.querySelectorAll(".textvalue")
    // console.log(notes);
    let data = []
    // console.log(data);

    notes.forEach((value) => {
        console.log(value.innerHTML);
        // data.push(value[i])
    })

    // console.log(data);


    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }

}


function addnote(textvalue = "") {
    if (text_input.value === "" || amount_input.value === "") {
        alert("Fill all Values ")
    } else {

        let creditbox = document.createElement('div')
        creditbox.classList.add("credit-list")

        creditbox.innerHTML = `
       <div class="Cnew">
          <div class="input">
              <h3 class="textvalue">${text_input.value}</h3>
              <span id"a">+${+amount_input.value}</span>
          </div>
           <h4>C</h4>
       </div>
         <div class="Clower">
            <button class="edit">Edit</button>
            <button class="delete" id="cDel">Delete</button>
        </div>
        `



        creditbox.querySelector('.Cnew').addEventListener('click', () => {
            document.querySelector('.Clower').classList.toggle('Cshow')
        })

        creditbox.querySelector('#cDel').addEventListener('click', () => {
            creditbox.remove();
        savenote()

        })


        savenote()


        add += +amount_input.value
        total += +amount_input.value
        totalPrice()
        transcation_list.prepend(creditbox)


    }
}


credit_btn.addEventListener('click', (e) => {
    e.preventDefault()

    addnote()

    text_input.value = ""
    amount_input.value = ""
})



debit_btn.addEventListener('click', (e) => {
    e.preventDefault()

    if (text_input.value === "" || amount_input.value === "") {
        alert("Fill all Values ")
    } else {
        let debitbox = document.createElement('div')
        debitbox.classList.add("debit-list")

        debitbox.innerHTML = `
        <div class="Dnew">
        <div class="input">
            <h3>${text_input.value}</h3>
            <span>-${+amount_input.value}</span>
        </div>
        <h4>C</h4>
        </div>
         <div class="Dlower">
              <button class="edit">Edit</button>
              <button class="delete" id="dDel">Delete</button>
                          
        </div>
        `

        debitbox.querySelector('.Dnew').addEventListener('click', () => {
            document.querySelector('.Dlower').classList.toggle('Dshow')
        })

        debitbox.querySelector('#dDel').addEventListener('click', () => {
            debitbox.remove();
        })


        debit += +amount_input.value
        total -= +amount_input.value
        totalPrice()
        transcation_list.prepend(debitbox)
    }


    text_input.value = ""
    amount_input.value = ""
})

totalPrice();















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

