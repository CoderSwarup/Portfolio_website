console.log("Drag and Drop")

const Imgbox = document.querySelector('.imgbox')
const Allbox = document.querySelectorAll('.box')

Imgbox.addEventListener('dragstart', (e) => {
    console.log("drag")
    Imgbox.classList.add('hold')
    setTimeout(() => {
        Imgbox.classList.add('hide')
    }, 0)
    e.target.parentNode.style.background = "red"
})

Imgbox.addEventListener('dragend', (e) => {
    // console.log("enddrag")
    e.target.className = "imgbox"
    e.target.parentNode.style.background = "black"


})


Allbox.forEach((ele) => {
    ele.addEventListener('dragover', (e) => {
        e.preventDefault()
        // console.log("over")


    })
    ele.addEventListener('dragenter', (e) => {

        // console.log("enter")




    })
    ele.addEventListener('dragleave', (e) => {
        // console.log("leav")


    })


    ele.addEventListener('drop', (e) => {
        // console.log("drop")
        e.target.style.background = "yellow"
        e.target.append(Imgbox)
    })
})