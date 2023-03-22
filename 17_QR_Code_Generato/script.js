console.log("Qr code generator");

const input = document.getElementById('text')
const btn = document.getElementById('btn')
const img = document.getElementById('image')
const btn2 = document.getElementById('btn2')
let share = ""

btn.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log(input.value);
    if (input.value) {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
        share = url
        setTimeout(() => {
            img.src = url
            img.classList.add("show")
            btn2.style.display = "block"
        }, 500)
        btn2.innerHTML = "Copy QR Code"
    }


})

input.addEventListener("keyup", () => {
    if (!input.value.trim()) {
        img.classList.remove("show");
        btn2.style.display = "none"
    }
})


btn2.addEventListener('click', () => {
    // console.log(share);
    const interval = setInterval(() => {
        btn2.innerHTML = "Coping....."

    }, 500)

    setTimeout(() => {
        clearInterval(interval)
        navigator.clipboard.writeText(share)
        btn2.innerHTML = "Copied"
    }, 1000)


})

