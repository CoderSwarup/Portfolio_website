const EndDate = "1 January 2024 12:00 AM"
const end = document.getElementById('enddate')

const inputs = document.querySelectorAll('input')

end.innerHTML = "1 JANUARY 2024"

function clock() {
    const End = new Date(EndDate)
    const now = new Date()

    const diff = (End - now) / 1000;// gives in millisecond  convert into sec
    // console.log(End, now, diff)

    // convert into days 
    // console.log(Math.floor(diff / 3600 / 24)) //convert into days


    if (diff < 0) {
        document.getElementById('col').innerHTML = "HAPPY NEW YEAR 2024"

    } else {





        //puting days in inputs 
        inputs[0].value = Math.floor(diff / 3600 / 24)

        // calculate hours 
        // console.log(Math.floor(diff / 3600) % 24)


        inputs[1].value = Math.floor(diff / 3600) % 24


        // calculate minutes
        // console.log(Math.floor(diff / 60) % 60)


        inputs[2].value = Math.floor(diff / 60) % 60


        // calculate sec
        // console.log(Math.floor(diff) % 60)


        inputs[3].value = Math.floor(diff) % 60
    }

}

setInterval(() => {
    clock()
})

//1day 24 hours
// 1hours = 60 min
// 60 min = 3600sec